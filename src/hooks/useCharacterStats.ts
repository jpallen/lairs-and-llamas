import { useState, useEffect } from "react";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import {
  parseCharacterFrontMatter,
  type CharacterStats,
} from "../parseCharacterFrontMatter.js";

export function useCharacterStats(
  gameDir: string | null,
  messageCount: number,
): CharacterStats[] {
  const [stats, setStats] = useState<CharacterStats[]>([]);

  useEffect(() => {
    if (!gameDir) {
      setStats([]);
      return;
    }

    const dir = join(gameDir, "CharacterSheets");
    try {
      const files = readdirSync(dir).filter(
        (f) => f.endsWith(".md") && f !== "template.md",
      );
      const parsed: CharacterStats[] = [];
      for (const f of files) {
        const content = readFileSync(join(dir, f), "utf-8");
        const result = parseCharacterFrontMatter(content);
        if (result) parsed.push(result);
      }
      setStats(parsed);
    } catch {
      setStats([]);
    }
  }, [gameDir, messageCount]);

  return stats;
}
