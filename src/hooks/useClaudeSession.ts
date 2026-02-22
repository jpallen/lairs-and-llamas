import { useCallback, useEffect, useRef, useState } from "react";
import WebSocket from "ws";
import type { ChatMessage, ToolCallInfo } from "../types.js";
import type { ClientMessage, ServerMessage } from "../protocol.js";
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
  let result = content.replace(HIDDEN_TAG_CLOSED_RE, "");
  result = result.replace(HIDDEN_TAG_OPEN_RE, "");
  result = result.replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

interface ClaudeSessionOptions {
  port: number;
  onSessionInit: (sessionId: string) => void;
  onClearSession: () => void;
  onModelChanged?: (model: string) => void;
  onEffortChanged?: (effort: EffortLevel) => void;
}

export function useClaudeSession({
  port,
  onSessionInit,
  onClearSession,
  onModelChanged,
  onEffortChanged,
}: ClaudeSessionOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentToolCall, setCurrentToolCall] = useState<ToolCallInfo | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [pendingQuestion, setPendingQuestion] = useState<PendingQuestion | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const callbackRefs = useRef({ onSessionInit, onClearSession, onModelChanged, onEffortChanged });
  callbackRefs.current = { onSessionInit, onClearSession, onModelChanged, onEffortChanged };

  useEffect(() => {
    const ws = new WebSocket(`ws://127.0.0.1:${port}`);
    wsRef.current = ws;

    ws.on("open", () => {
      debug("WebSocket connected to port", port);
    });

    ws.on("message", (data) => {
      try {
        const msg = JSON.parse(data.toString()) as ServerMessage;
        handleServerMessage(msg);
      } catch (err: any) {
        debug("Bad server message:", err?.message);
      }
    });

    ws.on("close", () => {
      debug("WebSocket disconnected");
    });

    ws.on("error", (err) => {
      debug("WebSocket error:", err.message);
    });

    function handleServerMessage(msg: ServerMessage): void {
      switch (msg.type) {
        case "stateSync":
          setMessages(msg.state.messages);
          setCurrentToolCall(msg.state.currentToolCall);
          setIsProcessing(msg.state.isProcessing);
          setStatusMessage(msg.state.statusMessage);
          setPendingQuestion(msg.state.pendingQuestion);
          if (msg.state.sessionId) {
            callbackRefs.current.onSessionInit(msg.state.sessionId);
          }
          break;

        case "messageAdd":
          setMessages((prev) => [...prev, msg.message]);
          break;

        case "messageUpdate":
          setMessages((prev) =>
            prev.map((m) =>
              m.id === msg.id ? { ...m, ...msg.patch } : m
            )
          );
          break;

        case "streamDelta":
          setMessages((prev) =>
            prev.map((m) =>
              m.id === msg.id ? { ...m, content: m.content + msg.delta } : m
            )
          );
          break;

        case "toolCallUpdate":
          setCurrentToolCall(msg.toolCall);
          break;

        case "processingState":
          setIsProcessing(msg.isProcessing);
          break;

        case "statusUpdate":
          setStatusMessage(msg.status);
          break;

        case "questionPending":
          setPendingQuestion(msg.question);
          break;

        case "sessionInit":
          callbackRefs.current.onSessionInit(msg.sessionId);
          break;

        case "modelChanged":
          callbackRefs.current.onModelChanged?.(msg.model);
          break;

        case "effortChanged":
          callbackRefs.current.onEffortChanged?.(msg.effort);
          break;

        case "sessionCleared":
          setMessages([]);
          setCurrentToolCall(null);
          setIsProcessing(false);
          setStatusMessage(null);
          setPendingQuestion(null);
          callbackRefs.current.onClearSession();
          break;

        case "error":
          debug("Server error:", msg.message);
          break;
      }
    }

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [port]);

  const sendWs = useCallback((msg: ClientMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      sendWs({ type: "sendMessage", text });
    },
    [sendWs]
  );

  const answerQuestion = useCallback(
    (answers: Record<string, string>) => {
      sendWs({ type: "answerQuestion", answers });
    },
    [sendWs]
  );

  const interrupt = useCallback(() => {
    sendWs({ type: "interrupt" });
  }, [sendWs]);

  const clearSession = useCallback(() => {
    sendWs({ type: "clearSession" });
  }, [sendWs]);

  const switchModel = useCallback(
    (model: string) => {
      sendWs({ type: "switchModel", model });
    },
    [sendWs]
  );

  const switchEffort = useCallback(
    (effort: EffortLevel) => {
      sendWs({ type: "switchEffort", effort });
    },
    [sendWs]
  );

  return {
    messages,
    currentToolCall,
    isProcessing,
    statusMessage,
    pendingQuestion,
    sendMessage,
    answerQuestion,
    interrupt,
    clearSession,
    switchModel,
    switchEffort,
  };
}
