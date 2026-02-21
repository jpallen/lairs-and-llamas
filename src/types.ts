export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "thinking" | "dice";
  content: string;
  isStreaming: boolean;
  diceRolls?: DiceRoll[];
  animate?: boolean;
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

// Parse roll_dice.py output: "2d10: [7, 3] = 10"
export function parseDiceOutput(output: string): DiceRoll[] {
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

export interface GameMeta {
  id: string;
  sessionId: string | null;
  createdAt: string;
  lastPlayedAt: string;
  campaign?: string;
}
