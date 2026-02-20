export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "thinking" | "dice";
  content: string;
  isStreaming: boolean;
  diceRolls?: DiceRoll[];
}

export interface DiceRoll {
  sides: number;
  values: number[];
  total: number;
  label: string; // e.g. "2d10"
}

export interface ToolCallInfo {
  toolName: string;
  input?: string;
}
