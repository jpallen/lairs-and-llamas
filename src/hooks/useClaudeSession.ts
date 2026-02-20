import { useCallback, useRef, useState } from "react";
import { query } from "@anthropic-ai/claude-agent-sdk";
import type { ChatMessage, ToolCallInfo, DiceRoll } from "../types.js";
import { debug } from "../debug.js";

export function useClaudeSession(systemPrompt: string, cwd: string, debugMode: boolean) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentToolCall, setCurrentToolCall] = useState<ToolCallInfo | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const sessionIdRef = useRef<string | null>(null);
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
                    },
                  ]);
                }
              }
            }
          }
          continue;
        }

        if (msg.type === "system" && msg.subtype === "init") {
          sessionIdRef.current = msg.session_id;
          debug("Session initialized:", msg.session_id);
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
            debugMode &&
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
            debugMode &&
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
          model: "opus",
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

  return { messages, currentToolCall, isProcessing, sendMessage };
}

// Parse roll_dice.py output: "2d10: [7, 3] = 10"
function parseDiceOutput(output: string): DiceRoll[] {
  const rolls: DiceRoll[] = [];
  const linePattern = /(\d+d\d+):\s*\[([^\]]+)\]\s*=\s*(\d+)/g;
  let match: RegExpExecArray | null;
  while ((match = linePattern.exec(output)) !== null) {
    const label = match[1];
    const values = match[2].split(",").map((s) => parseInt(s.trim(), 10));
    const total = parseInt(match[3], 10);
    const sidesMatch = label.match(/d(\d+)/);
    const sides = sidesMatch ? parseInt(sidesMatch[1], 10) : 6;
    rolls.push({ sides, values, total, label });
  }
  return rolls;
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
