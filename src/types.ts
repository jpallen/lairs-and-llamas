export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "thinking" | "dice" | "tool";
  content: string;
  isStreaming: boolean;
  diceRolls?: DiceRoll[];
  animate?: boolean;
  toolName?: string;
}

export interface DiceRoll {
  sides: number;
  values: number[];
  total: number;
  label: string; // e.g. "2d10"
  description?: string; // e.g. "Pip's Initiative"
}

export interface ToolCallInfo {
  toolName: string;
  input?: string;
}

// Parse roll_dice.py output: "2d10: [7, 3] = 10" or "Pip's Initiative | 1d20: [15] = 15"
export function parseDiceOutput(output: string): DiceRoll[] {
  const rolls: DiceRoll[] = [];
  const linePattern = /(?:(.+?)\s*\|\s*)?(\d+d\d+):\s*\[([^\]]+)\]\s*=\s*(\d+)/g;
  let match: RegExpExecArray | null;
  while ((match = linePattern.exec(output)) !== null) {
    const description = match[1]?.trim();
    const label = match[2];
    const values = match[3].split(",").map((s) => parseInt(s.trim(), 10));
    const total = parseInt(match[4], 10);
    const sidesMatch = label.match(/d(\d+)/);
    const sides = sidesMatch ? parseInt(sidesMatch[1], 10) : 6;
    rolls.push({ sides, values, total, label, ...(description && { description }) });
  }
  return rolls;
}

export interface GameMeta {
  id: string;
  sessionId: string | null;
  createdAt: string;
  lastPlayedAt: string;
  campaign?: string;
}
