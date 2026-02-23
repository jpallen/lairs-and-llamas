import type { ChatMessage, ToolCallInfo, DiceRoll } from "./types.js";
import type { EffortLevel } from "./gameManager.js";

// === Client → Server messages ===

export type ClientMessage =
  | { type: "auth"; password: string }
  | { type: "sendMessage"; text: string }
  | { type: "answerQuestion"; answers: Record<string, string> }
  | { type: "interrupt" }
  | { type: "clearSession" }
  | { type: "switchModel"; model: string }
  | { type: "switchEffort"; effort: EffortLevel };

// === Server → Client messages ===

export interface StateSyncPayload {
  messages: ChatMessage[];
  currentToolCall: ToolCallInfo | null;
  isProcessing: boolean;
  statusMessage: string | null;
  pendingQuestion: any | null;
  sessionId: string | null;
  model: string;
  effort: EffortLevel;
  clientCount: number;
}

export type ServerMessage =
  | { type: "stateSync"; state: StateSyncPayload }
  | { type: "messageAdd"; message: ChatMessage }
  | { type: "messageUpdate"; id: string; patch: Partial<ChatMessage> }
  | { type: "streamDelta"; id: string; delta: string }
  | { type: "toolCallUpdate"; toolCall: ToolCallInfo | null }
  | { type: "processingState"; isProcessing: boolean }
  | { type: "statusUpdate"; status: string | null }
  | { type: "questionPending"; question: any | null }
  | { type: "sessionInit"; sessionId: string }
  | { type: "modelChanged"; model: string }
  | { type: "effortChanged"; effort: EffortLevel }
  | { type: "sessionCleared" }
  | { type: "clientCount"; count: number }
  | { type: "authResult"; success: boolean; error?: string }
  | { type: "error"; message: string };
