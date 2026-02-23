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
  modifier?: number;
  modifiedTotal?: number;
}

export interface ToolCallInfo {
  toolName: string;
  input?: string;
}

// Parse roll_dice.py output: "2d10: [7, 3] = 10" or "Pip's Initiative | 1d20: [15] = 15 (+ 3 = 18)"
export function parseDiceOutput(output: string): DiceRoll[] {
  const rolls: DiceRoll[] = [];
  const linePattern = /(?:(.+?)\s*\|\s*)?(\d+d\d+):\s*\[([^\]]+)\]\s*=\s*(\d+)(?:\s*\(\s*([+-])\s*(\d+)\s*=\s*(\d+)\s*\))?/g;
  let match: RegExpExecArray | null;
  while ((match = linePattern.exec(output)) !== null) {
    const description = match[1]?.trim();
    const label = match[2];
    const values = match[3].split(",").map((s) => parseInt(s.trim(), 10));
    const total = parseInt(match[4], 10);
    const sidesMatch = label.match(/d(\d+)/);
    const sides = sidesMatch ? parseInt(sidesMatch[1], 10) : 6;
    const roll: DiceRoll = { sides, values, total, label, ...(description && { description }) };
    if (match[5] && match[6] && match[7]) {
      const sign = match[5] === "+" ? 1 : -1;
      roll.modifier = sign * parseInt(match[6], 10);
      roll.modifiedTotal = parseInt(match[7], 10);
    }
    rolls.push(roll);
  }
  return rolls;
}

export function summarizeToolInput(
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

export interface GameMeta {
  id: string;
  sessionId: string | null;
  createdAt: string;
  lastPlayedAt: string;
  campaign?: string;
  password: string;
}
