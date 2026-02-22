import { WebSocketServer, WebSocket } from "ws";
import { query, type Query } from "@anthropic-ai/claude-agent-sdk";
import { parseDiceOutput } from "../types.js";
import type { ChatMessage, ToolCallInfo } from "../types.js";
import type { EffortLevel } from "../gameManager.js";
import type { ClientMessage, ServerMessage, StateSyncPayload } from "../protocol.js";
import { debug } from "../debug.js";

export interface GameServerOptions {
  systemPrompt: string;
  cwd: string;
  model: string;
  effort: EffortLevel;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
}

export class GameServer {
  private wss: WebSocketServer | null = null;
  private clients = new Set<WebSocket>();
  private port = 0;

  // Authoritative state
  private messages: ChatMessage[];
  private currentToolCall: ToolCallInfo | null = null;
  private isProcessing = false;
  private statusMessage: string | null = null;
  private pendingQuestion: any | null = null;
  private sessionId: string | null;
  private model: string;
  private effort: EffortLevel;

  // SDK refs
  private queryRef: Query | null = null;
  private processingLock = false;
  private pendingDiceToolIds = new Set<string>();
  private pendingQuestionResolve: ((result: any) => void) | null = null;

  // Config
  private systemPrompt: string;
  private cwd: string;
  private initialPrompt?: string;

  constructor(options: GameServerOptions) {
    this.systemPrompt = options.systemPrompt;
    this.cwd = options.cwd;
    this.model = options.model;
    this.effort = options.effort;
    this.sessionId = options.initialSessionId;
    this.messages = [...options.initialMessages];
    this.initialPrompt = options.initialPrompt;
  }

  async start(): Promise<number> {
    return new Promise((resolve) => {
      this.wss = new WebSocketServer({ port: 0 }, () => {
        const addr = this.wss!.address();
        this.port = typeof addr === "object" && addr !== null ? addr.port : 0;
        debug("GameServer started on port", this.port);
        resolve(this.port);
      });

      this.wss.on("connection", (ws) => {
        debug("Client connected, total:", this.clients.size + 1);
        this.clients.add(ws);

        // Send full state sync
        this.send(ws, {
          type: "stateSync",
          state: this.getStateSnapshot(),
        });

        // Auto-send initial prompt on first client connection
        if (this.initialPrompt) {
          const prompt = this.initialPrompt;
          this.initialPrompt = undefined;
          this.sendMessage(prompt);
        }

        ws.on("message", (data) => {
          try {
            const msg = JSON.parse(data.toString()) as ClientMessage;
            this.handleClientMessage(msg);
          } catch (err: any) {
            debug("Bad client message:", err?.message);
          }
        });

        ws.on("close", () => {
          this.clients.delete(ws);
          debug("Client disconnected, remaining:", this.clients.size);
        });
      });
    });
  }

  async stop(): Promise<void> {
    if (this.queryRef && this.processingLock) {
      try {
        await this.queryRef.interrupt();
      } catch {}
    }
    for (const ws of this.clients) {
      ws.close();
    }
    this.clients.clear();
    return new Promise((resolve) => {
      if (this.wss) {
        this.wss.close(() => resolve());
      } else {
        resolve();
      }
    });
  }

  getPort(): number {
    return this.port;
  }

  private getStateSnapshot(): StateSyncPayload {
    return {
      messages: this.messages,
      currentToolCall: this.currentToolCall,
      isProcessing: this.isProcessing,
      statusMessage: this.statusMessage,
      pendingQuestion: this.pendingQuestion,
      sessionId: this.sessionId,
      model: this.model,
      effort: this.effort,
    };
  }

  private send(ws: WebSocket, msg: ServerMessage): void {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }

  private broadcast(msg: ServerMessage): void {
    const data = JSON.stringify(msg);
    for (const ws of this.clients) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(data);
      }
    }
  }

  private handleClientMessage(msg: ClientMessage): void {
    switch (msg.type) {
      case "sendMessage":
        this.sendMessage(msg.text);
        break;
      case "answerQuestion":
        this.answerQuestion(msg.answers);
        break;
      case "interrupt":
        this.interrupt();
        break;
      case "clearSession":
        this.clearSession();
        break;
      case "switchModel":
        this.model = msg.model;
        this.broadcast({ type: "modelChanged", model: msg.model });
        break;
      case "switchEffort":
        this.effort = msg.effort;
        this.broadcast({ type: "effortChanged", effort: msg.effort });
        break;
    }
  }

  private sendMessage(text: string): void {
    if (this.processingLock) return;
    this.processingLock = true;
    debug("Sending message:", text);

    const id = crypto.randomUUID();
    const userMsg: ChatMessage = { id, role: "user", content: text, isStreaming: false };
    this.messages.push(userMsg);
    this.broadcast({ type: "messageAdd", message: userMsg });

    this.isProcessing = true;
    this.broadcast({ type: "processingState", isProcessing: true });

    const gen = query({
      prompt: text,
      options: {
        systemPrompt: this.systemPrompt,
        cwd: this.cwd,
        tools: { type: "preset", preset: "claude_code" },
        canUseTool: this.canUseTool.bind(this),
        includePartialMessages: true,
        resume: this.sessionId ?? undefined,
        settingSources: ["project"],
        model: this.model,
        effort: this.effort,
        maxThinkingTokens: 1024,
      },
    });
    this.queryRef = gen;

    this.processMessages(gen).catch((err) => {
      debug("Claude session error:", err?.message ?? err, err?.stack);
      this.isProcessing = false;
      this.processingLock = false;
      this.broadcast({ type: "processingState", isProcessing: false });
      this.broadcast({ type: "error", message: err?.message ?? "Unknown error" });
    });
  }

  private async canUseTool(
    toolName: string,
    input: Record<string, unknown>,
  ): Promise<any> {
    if (["Read", "Glob", "Grep", "Task"].includes(toolName)) {
      return { behavior: "allow", updatedInput: input };
    }

    if (toolName === "Bash") {
      const cmd = String(input.command ?? "");
      if (cmd.includes("roll_dice")) {
        return { behavior: "allow", updatedInput: input };
      }
      if (cmd.startsWith("rm ") && !cmd.includes("..") && (
        cmd.includes("/CharacterSheets/") ||
        cmd.includes("/Campaign/") ||
        cmd.endsWith("/JOURNAL.md")
      )) {
        return { behavior: "allow", updatedInput: input };
      }
      return { behavior: "deny", message: "Only roll_dice.py and deleting writable files are allowed via Bash." };
    }

    if (toolName === "Write" || toolName === "Edit") {
      const filePath = String(input.file_path ?? "");
      if (
        filePath.includes("/CharacterSheets/") ||
        filePath.endsWith("/JOURNAL.md") ||
        filePath.includes("/Campaign/")
      ) {
        return { behavior: "allow", updatedInput: input };
      }
      return { behavior: "deny", message: "Can only write to CharacterSheets/, JOURNAL.md, or Campaign/." };
    }

    if (toolName === "AskUserQuestion") {
      return this.awaitUserAnswer(input);
    }

    return { behavior: "deny", message: `Tool ${toolName} is not allowed.` };
  }

  private awaitUserAnswer(input: Record<string, unknown>): Promise<any> {
    return new Promise((resolve) => {
      this.pendingQuestionResolve = resolve;
      debug("AskUserQuestion input:", JSON.stringify(input).slice(0, 500));
      this.pendingQuestion = { questions: input.questions };
      this.broadcast({ type: "questionPending", question: this.pendingQuestion });
    });
  }

  private answerQuestion(answers: Record<string, string>): void {
    if (this.pendingQuestionResolve) {
      this.pendingQuestionResolve({
        behavior: "allow",
        updatedInput: {
          ...(this.pendingQuestion ? { questions: this.pendingQuestion.questions } : {}),
          answers,
        },
      });
      this.pendingQuestionResolve = null;
      this.pendingQuestion = null;
      this.broadcast({ type: "questionPending", question: null });
    }
  }

  private async interrupt(): Promise<void> {
    if (this.queryRef && this.processingLock) {
      debug("Interrupting current query");
      try {
        await this.queryRef.interrupt();
      } catch (err: any) {
        debug("Interrupt error:", err?.message);
      }
      this.queryRef = null;
      this.isProcessing = false;
      this.processingLock = false;
      this.currentToolCall = null;
      this.statusMessage = null;
      this.broadcast({ type: "processingState", isProcessing: false });
      this.broadcast({ type: "toolCallUpdate", toolCall: null });
      this.broadcast({ type: "statusUpdate", status: null });
      // Mark streaming messages as complete
      for (const m of this.messages) {
        if (m.isStreaming) {
          m.isStreaming = false;
          this.broadcast({ type: "messageUpdate", id: m.id, patch: { isStreaming: false } });
        }
      }
    }
  }

  private clearSession(): void {
    debug("Clearing session");
    this.sessionId = null;
    this.queryRef = null;
    this.messages = [];
    this.isProcessing = false;
    this.processingLock = false;
    this.currentToolCall = null;
    this.statusMessage = null;
    this.pendingDiceToolIds.clear();
    this.broadcast({ type: "sessionCleared" });
  }

  private async processMessages(gen: ReturnType<typeof query>): Promise<void> {
    let currentAssistantId: string | null = null;
    let currentThinkingId: string | null = null;

    for await (const msg of gen) {
      debug("SDK message:", msg.type, "subtype" in msg ? (msg as any).subtype : "", "uuid" in msg ? msg.uuid : "");

      if (msg.type === "user") {
        debug("User message from SDK:", JSON.stringify((msg as any).message?.content).slice(0, 200));
        const content = (msg as any).message?.content;
        if (Array.isArray(content)) {
          for (const block of content) {
            if (
              block.type === "tool_result" &&
              this.pendingDiceToolIds.has(block.tool_use_id)
            ) {
              this.pendingDiceToolIds.delete(block.tool_use_id);
              const output = typeof block.content === "string"
                ? block.content
                : Array.isArray(block.content)
                  ? block.content.map((c: any) => c.text ?? "").join("")
                  : "";
              const rolls = parseDiceOutput(output);
              if (rolls.length > 0) {
                debug("Parsed dice rolls:", rolls);
                const id = crypto.randomUUID();
                const diceMsg: ChatMessage = {
                  id,
                  role: "dice",
                  content: output,
                  isStreaming: false,
                  diceRolls: rolls,
                  animate: true,
                };
                this.messages.push(diceMsg);
                this.broadcast({ type: "messageAdd", message: diceMsg });
                // Stop animation after settle time
                setTimeout(() => {
                  const m = this.messages.find((m) => m.id === id);
                  if (m) m.animate = false;
                  this.broadcast({ type: "messageUpdate", id, patch: { animate: false } });
                }, 1400);
              }
            }
          }
        }
        continue;
      }

      if (msg.type === "system" && msg.subtype === "init") {
        this.sessionId = msg.session_id;
        debug("Session initialized:", msg.session_id);
        this.broadcast({ type: "sessionInit", sessionId: msg.session_id });
        continue;
      }

      if (msg.type === "system" && (msg as any).subtype === "compact_boundary") {
        debug("Context compacted, pre_tokens:", (msg as any).compact_metadata?.pre_tokens);
        continue;
      }

      if (msg.type === "system" && (msg as any).subtype === "status") {
        const status = (msg as any).status;
        debug("System status:", status);
        this.statusMessage = status === "compacting" ? "Compacting context..." : null;
        this.broadcast({ type: "statusUpdate", status: this.statusMessage });
        continue;
      }

      if (msg.type === "stream_event") {
        const event = msg.event;
        debug("Stream event:", event.type, "content_block" in event ? (event as any).content_block?.type : "");

        if (
          event.type === "content_block_start" &&
          event.content_block.type === "text"
        ) {
          currentAssistantId = msg.uuid;
          const assistantMsg: ChatMessage = {
            id: msg.uuid,
            role: "assistant",
            content: "",
            isStreaming: true,
          };
          this.messages.push(assistantMsg);
          this.broadcast({ type: "messageAdd", message: assistantMsg });
        } else if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          if (currentAssistantId) {
            const deltaText = event.delta.text;
            const m = this.messages.find((m) => m.id === currentAssistantId);
            if (m) m.content += deltaText;
            this.broadcast({ type: "streamDelta", id: currentAssistantId, delta: deltaText });
          }
        } else if (
          event.type === "content_block_start" &&
          event.content_block.type === "thinking"
        ) {
          currentThinkingId = msg.uuid + "-thinking";
          const thinkingMsg: ChatMessage = {
            id: currentThinkingId,
            role: "thinking",
            content: "",
            isStreaming: true,
          };
          this.messages.push(thinkingMsg);
          this.broadcast({ type: "messageAdd", message: thinkingMsg });
        } else if (
          event.type === "content_block_delta" &&
          event.delta.type === "thinking_delta" &&
          currentThinkingId
        ) {
          const deltaText = (event.delta as any).thinking;
          const m = this.messages.find((m) => m.id === currentThinkingId);
          if (m) m.content += deltaText;
          this.broadcast({ type: "streamDelta", id: currentThinkingId, delta: deltaText });
        } else if (
          event.type === "content_block_start" &&
          event.content_block.type === "tool_use"
        ) {
          this.currentToolCall = {
            toolName: event.content_block.name,
            input: undefined,
          };
          this.broadcast({ type: "toolCallUpdate", toolCall: this.currentToolCall });
        } else if (event.type === "message_stop") {
          if (currentThinkingId) {
            const m = this.messages.find((m) => m.id === currentThinkingId);
            if (m) m.isStreaming = false;
            this.broadcast({ type: "messageUpdate", id: currentThinkingId, patch: { isStreaming: false } });
            currentThinkingId = null;
          }
          if (currentAssistantId) {
            const m = this.messages.find((m) => m.id === currentAssistantId);
            if (m) m.isStreaming = false;
            this.broadcast({ type: "messageUpdate", id: currentAssistantId, patch: { isStreaming: false } });
            currentAssistantId = null;
          }
        }
        continue;
      }

      if (msg.type === "assistant" && msg.message) {
        debug("Assistant message content types:", msg.message.content.map((b: any) => b.type));
        for (const block of msg.message.content) {
          if (block.type === "tool_use") {
            const input = block.input as Record<string, unknown>;
            const summary = summarizeToolInput(block.name, input);
            this.currentToolCall = { toolName: block.name, input: summary };
            this.broadcast({ type: "toolCallUpdate", toolCall: this.currentToolCall });
            // Add persistent tool call message
            const toolMsg: ChatMessage = {
              id: crypto.randomUUID(),
              role: "tool",
              content: summary,
              toolName: block.name,
              isStreaming: false,
            };
            this.messages.push(toolMsg);
            this.broadcast({ type: "messageAdd", message: toolMsg });
            // Track roll_dice.py bash calls
            if (
              block.name === "Bash" &&
              typeof input.command === "string" &&
              input.command.includes("roll_dice")
            ) {
              this.pendingDiceToolIds.add(block.id);
              debug("Dice roll detected, tool_use_id:", block.id);
            }
          }
        }
        continue;
      }

      if (msg.type === "result") {
        debug("Result:", msg.subtype, "is_error:", msg.is_error);
        if ("errors" in msg) debug("Result errors:", msg.errors);
        if ("result" in msg) debug("Result text:", (msg as any).result);

        this.isProcessing = false;
        this.processingLock = false;
        this.currentToolCall = null;
        this.broadcast({ type: "processingState", isProcessing: false });
        this.broadcast({ type: "toolCallUpdate", toolCall: null });

        if (currentAssistantId) {
          const m = this.messages.find((m) => m.id === currentAssistantId);
          if (m) m.isStreaming = false;
          this.broadcast({ type: "messageUpdate", id: currentAssistantId, patch: { isStreaming: false } });
          currentAssistantId = null;
        }
      }
    }
  }
}

function summarizeToolInput(
  toolName: string,
  input: Record<string, unknown>
): string {
  switch (toolName) {
    case "Read":
      return String(input.file_path ?? "");
    case "Write":
    case "Edit":
      return String(input.file_path ?? "");
    case "Bash":
      return String(input.command ?? "").slice(0, 80);
    case "Glob":
      return String(input.pattern ?? "");
    case "Grep":
      return `/${input.pattern ?? ""}/ in ${input.path ?? "."}`;
    case "Task":
      return String(input.description ?? "");
    default:
      return JSON.stringify(input).slice(0, 60);
  }
}
