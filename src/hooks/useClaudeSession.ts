import { useCallback, useEffect, useRef, useState } from "react";
import { query } from "@anthropic-ai/claude-agent-sdk";
import { parseDiceOutput } from "../types.js";
import type { ChatMessage, ToolCallInfo, DiceRoll } from "../types.js";
import { debug } from "../debug.js";

const THINKING_TAG_CLOSED_RE = /<thinking>[\s\S]*?<\/thinking>\s*/g;
const THINKING_TAG_OPEN_RE = /<thinking>[\s\S]*$/;

export function stripDmThinking(content: string): string {
  // Strip fully closed <thinking>...</thinking> blocks
  let result = content.replace(THINKING_TAG_CLOSED_RE, "");
  // Strip unclosed <thinking>... at the end (still streaming)
  result = result.replace(THINKING_TAG_OPEN_RE, "");
  // Collapse runs of 3+ newlines down to 2 (one blank line)
  result = result.replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

interface ClaudeSessionOptions {
  systemPrompt: string;
  cwd: string;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
}

export function useClaudeSession({
  systemPrompt,
  cwd,
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

  const sessionIdRef = useRef<string | null>(initialSessionId);
  const onSessionInitRef = useRef(onSessionInit);
  onSessionInitRef.current = onSessionInit;
  const processingRef = useRef(false);
  const pendingDiceToolIds = useRef<Set<string>>(new Set());

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
              setCurrentToolCall({
                toolName: block.name,
                input: summarizeToolInput(block.name, input),
              });
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
          permissionMode: "bypassPermissions",
          allowDangerouslySkipPermissions: true,
          includePartialMessages: true,
          resume: sessionIdRef.current ?? undefined,
          settingSources: ["project"],
          model: "claude-opus-4-6",
          maxThinkingTokens: 1000,
        },
      });

      processMessages(gen).catch((err) => {
        debug("Claude session error:", err?.message ?? err, err?.stack);
        setIsProcessing(false);
        processingRef.current = false;
      });
    },
    [systemPrompt, cwd, processMessages]
  );

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { messages, currentToolCall, isProcessing, statusMessage, sendMessage };
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
