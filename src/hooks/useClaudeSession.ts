import { useCallback, useEffect, useRef, useState } from "react";
import { query, type Query } from "@anthropic-ai/claude-agent-sdk";
import { parseDiceOutput } from "../types.js";
import type { ChatMessage, ToolCallInfo, DiceRoll } from "../types.js";
import type { EffortLevel } from "../gameManager.js";
import { debug } from "../debug.js";

export interface QuestionOption {
  label: string;
  description: string;
}

export interface PendingQuestion {
  questions: Array<{
    question: string;
    header: string;
    options: QuestionOption[];
    multiSelect: boolean;
  }>;
}

const HIDDEN_TAG_CLOSED_RE = /<(?:thinking|hide)>[\s\S]*?<\/(?:thinking|hide)>\s*/g;
const HIDDEN_TAG_OPEN_RE = /<(?:thinking|hide)>[\s\S]*$/;

export function stripDmThinking(content: string): string {
  // Strip fully closed <thinking>...</thinking> and <hide>...</hide> blocks
  let result = content.replace(HIDDEN_TAG_CLOSED_RE, "");
  // Strip unclosed tags at the end (still streaming)
  result = result.replace(HIDDEN_TAG_OPEN_RE, "");
  // Collapse runs of 3+ newlines down to 2 (one blank line)
  result = result.replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

interface ClaudeSessionOptions {
  systemPrompt: string;
  cwd: string;
  model: string;
  effort: EffortLevel;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
}

export function useClaudeSession({
  systemPrompt,
  cwd,
  model,
  effort,
  initialSessionId,
  initialMessages,
  initialPrompt,
  onSessionInit,
}: ClaudeSessionOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [currentToolCall, setCurrentToolCall] = useState<ToolCallInfo | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [pendingQuestion, setPendingQuestion] = useState<PendingQuestion | null>(null);

  const sessionIdRef = useRef<string | null>(initialSessionId);
  const onSessionInitRef = useRef(onSessionInit);
  onSessionInitRef.current = onSessionInit;
  const processingRef = useRef(false);
  const pendingDiceToolIds = useRef<Set<string>>(new Set());
  const queryRef = useRef<Query | null>(null);
  const pendingQuestionResolveRef = useRef<((result: any) => void) | null>(null);

  const awaitUserAnswer = useCallback(
    (input: Record<string, unknown>): Promise<any> => {
      return new Promise((resolve) => {
        pendingQuestionResolveRef.current = resolve;
        debug("AskUserQuestion input:", JSON.stringify(input).slice(0, 500));
        setPendingQuestion({
          questions: input.questions as PendingQuestion["questions"],
        });
      });
    },
    []
  );

  const answerQuestion = useCallback(
    (answers: Record<string, string>) => {
      if (pendingQuestionResolveRef.current) {
        const currentQuestion = pendingQuestion;
        pendingQuestionResolveRef.current({
          behavior: "allow",
          updatedInput: {
            ...(currentQuestion ? { questions: currentQuestion.questions } : {}),
            answers,
          },
        });
        pendingQuestionResolveRef.current = null;
        setPendingQuestion(null);
      }
    },
    [pendingQuestion]
  );

  const canUseTool = useCallback(
    async (
      toolName: string,
      input: Record<string, unknown>,
    ): Promise<any> => {
      // Always allow read-only tools
      if (["Read", "Glob", "Grep", "Task"].includes(toolName)) {
        return { behavior: "allow", updatedInput: input };
      }

      // Allow Bash only for roll_dice.py
      if (toolName === "Bash") {
        const cmd = String(input.command ?? "");
        if (cmd.includes("roll_dice")) {
          return { behavior: "allow", updatedInput: input };
        }
        return { behavior: "deny", message: "Only roll_dice.py is allowed via Bash." };
      }

      // Allow Write/Edit only to CharacterSheets/, JOURNAL.md, Campaign/
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

      // AskUserQuestion — route to TUI overlay
      if (toolName === "AskUserQuestion") {
        return awaitUserAnswer(input);
      }

      // Deny everything else
      return { behavior: "deny", message: `Tool ${toolName} is not allowed.` };
    },
    [awaitUserAnswer]
  );

  const processMessages = useCallback(
    async (gen: ReturnType<typeof query>) => {
      let currentAssistantId: string | null = null;
      let currentThinkingId: string | null = null;

      for await (const msg of gen) {
        debug("SDK message:", msg.type, "subtype" in msg ? (msg as any).subtype : "", "uuid" in msg ? msg.uuid : "");

        if (msg.type === "user") {
          debug("User message from SDK:", JSON.stringify((msg as any).message?.content).slice(0, 200));
          // Check for dice roll tool results
          const content = (msg as any).message?.content;
          if (Array.isArray(content)) {
            for (const block of content) {
              if (
                block.type === "tool_result" &&
                pendingDiceToolIds.current.has(block.tool_use_id)
              ) {
                pendingDiceToolIds.current.delete(block.tool_use_id);
                const output = typeof block.content === "string"
                  ? block.content
                  : Array.isArray(block.content)
                    ? block.content.map((c: any) => c.text ?? "").join("")
                    : "";
                const rolls = parseDiceOutput(output);
                if (rolls.length > 0) {
                  debug("Parsed dice rolls:", rolls);
                  const id = crypto.randomUUID();
                  setMessages((prev) => [
                    ...prev,
                    {
                      id,
                      role: "dice",
                      content: output,
                      isStreaming: false,
                      diceRolls: rolls,
                      animate: true,
                    },
                  ]);
                  // Stop animation after it settles so scrolling doesn't replay it
                  setTimeout(() => {
                    setMessages((prev) =>
                      prev.map((m) =>
                        m.id === id ? { ...m, animate: false } : m
                      )
                    );
                  }, 1400);
                }
              }
            }
          }
          continue;
        }

        if (msg.type === "system" && msg.subtype === "init") {
          sessionIdRef.current = msg.session_id;
          onSessionInitRef.current(msg.session_id);
          debug("Session initialized:", msg.session_id);
          continue;
        }

        if (msg.type === "system" && (msg as any).subtype === "compact_boundary") {
          debug("Context compacted, pre_tokens:", (msg as any).compact_metadata?.pre_tokens);
          continue;
        }

        if (msg.type === "system" && (msg as any).subtype === "status") {
          const status = (msg as any).status;
          debug("System status:", status);
          setStatusMessage(status === "compacting" ? "Compacting context..." : null);
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
            setMessages((prev) => [
              ...prev,
              {
                id: msg.uuid,
                role: "assistant",
                content: "",
                isStreaming: true,
              },
            ]);
          } else if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            if (currentAssistantId) {
              const deltaText = event.delta.text;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === currentAssistantId
                    ? { ...m, content: m.content + deltaText }
                    : m
                )
              );
            }
          } else if (
            event.type === "content_block_start" &&
            event.content_block.type === "thinking"
          ) {
            currentThinkingId = msg.uuid + "-thinking";
            setMessages((prev) => [
              ...prev,
              {
                id: currentThinkingId!,
                role: "thinking",
                content: "",
                isStreaming: true,
              },
            ]);
          } else if (
            event.type === "content_block_delta" &&
            event.delta.type === "thinking_delta" &&
            currentThinkingId
          ) {
            const deltaText = (event.delta as any).thinking;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === currentThinkingId
                  ? { ...m, content: m.content + deltaText }
                  : m
              )
            );
          } else if (
            event.type === "content_block_start" &&
            event.content_block.type === "tool_use"
          ) {
            setCurrentToolCall({
              toolName: event.content_block.name,
              input: undefined,
            });
          } else if (event.type === "message_stop") {
            if (currentThinkingId) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === currentThinkingId
                    ? { ...m, isStreaming: false }
                    : m
                )
              );
              currentThinkingId = null;
            }
            if (currentAssistantId) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === currentAssistantId
                    ? { ...m, isStreaming: false }
                    : m
                )
              );
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
              setCurrentToolCall({
                toolName: block.name,
                input: summary,
              });
              // Add persistent tool call message for verbose mode
              setMessages((prev) => [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  role: "tool",
                  content: summary,
                  toolName: block.name,
                  isStreaming: false,
                },
              ]);
              // Track roll_dice.py bash calls
              if (
                block.name === "Bash" &&
                typeof input.command === "string" &&
                input.command.includes("roll_dice")
              ) {
                pendingDiceToolIds.current.add(block.id);
                debug("Dice roll detected, tool_use_id:", block.id);
              }
            }
          }
          continue;
        }

        if (msg.type === "result") {
          debug("Result:", msg.subtype, "is_error:", msg.is_error);
          if ("errors" in msg) {
            debug("Result errors:", msg.errors);
          }
          if ("result" in msg) {
            debug("Result text:", (msg as any).result);
          }
          setIsProcessing(false);
          processingRef.current = false;
          setCurrentToolCall(null);
          if (currentAssistantId) {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === currentAssistantId
                  ? { ...m, isStreaming: false }
                  : m
              )
            );
            currentAssistantId = null;
          }
        }
      }
    },
    []
  );

  const sendMessage = useCallback(
    (text: string) => {
      if (processingRef.current) return;
      processingRef.current = true;
      debug("Sending message:", text);

      const id = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        { id, role: "user", content: text, isStreaming: false },
      ]);
      setIsProcessing(true);

      const gen = query({
        prompt: text,
        options: {
          systemPrompt,
          cwd,
          tools: { type: "preset", preset: "claude_code" },
          canUseTool,
          includePartialMessages: true,
          resume: sessionIdRef.current ?? undefined,
          settingSources: ["project"],
          model,
          effort,
          maxThinkingTokens: 1024,
        },
      });
      queryRef.current = gen;

      processMessages(gen).catch((err) => {
        debug("Claude session error:", err?.message ?? err, err?.stack);
        setIsProcessing(false);
        processingRef.current = false;
      });
    },
    [systemPrompt, cwd, model, effort, canUseTool, processMessages]
  );

  const interrupt = useCallback(async () => {
    if (queryRef.current && processingRef.current) {
      debug("Interrupting current query");
      try {
        await queryRef.current.interrupt();
      } catch (err: any) {
        debug("Interrupt error:", err?.message);
      }
      queryRef.current = null;
      setIsProcessing(false);
      processingRef.current = false;
      setCurrentToolCall(null);
      setStatusMessage(null);
      // Mark any streaming messages as complete
      setMessages((prev) =>
        prev.map((m) => (m.isStreaming ? { ...m, isStreaming: false } : m))
      );
    }
  }, []);

  const clearSession = useCallback(() => {
    debug("Clearing session");
    sessionIdRef.current = null;
    queryRef.current = null;
    setMessages([]);
    setIsProcessing(false);
    processingRef.current = false;
    setCurrentToolCall(null);
    setStatusMessage(null);
    pendingDiceToolIds.current.clear();
  }, []);

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { messages, currentToolCall, isProcessing, statusMessage, pendingQuestion, sendMessage, answerQuestion, interrupt, clearSession };
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
