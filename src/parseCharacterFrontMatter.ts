import yaml from "js-yaml";

export interface CharacterStats {
  name: string;
  class: string;
  level: number;
  race: string;
  ac: number;
  hp: { current: number; max: number; temp: number };
  spell_slots: Record<number, { total: number; used: number }>;
  conditions: string[];
}

export function parseCharacterFrontMatter(
  content: string,
): CharacterStats | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  let parsed: unknown;
  try {
    parsed = yaml.load(match[1]);
  } catch {
    return null;
  }

  if (!parsed || typeof parsed !== "object") return null;
  const data = parsed as Record<string, unknown>;

  if (typeof data.name !== "string" || !data.name) return null;
  if (typeof data.class !== "string") return null;
  if (typeof data.level !== "number") return null;
  if (typeof data.race !== "string") return null;
  if (typeof data.ac !== "number") return null;

  // Parse hp
  const hp = data.hp as Record<string, unknown> | undefined;
  if (!hp || typeof hp !== "object") return null;
  if (
    typeof hp.current !== "number" ||
    typeof hp.max !== "number" ||
    typeof hp.temp !== "number"
  )
    return null;

  // Parse spell_slots (optional)
  const spellSlots: Record<number, { total: number; used: number }> = {};
  if (data.spell_slots && typeof data.spell_slots === "object") {
    for (const [key, val] of Object.entries(
      data.spell_slots as Record<string, unknown>,
    )) {
      const level = parseInt(key, 10);
      if (isNaN(level)) continue;
      const slot = val as Record<string, unknown>;
      if (
        slot &&
        typeof slot === "object" &&
        typeof slot.total === "number" &&
        typeof slot.used === "number"
      ) {
        spellSlots[level] = { total: slot.total, used: slot.used };
      }
    }
  }

  // Parse conditions (optional)
  const conditions: string[] = [];
  if (Array.isArray(data.conditions)) {
    for (const c of data.conditions) {
      if (typeof c === "string") conditions.push(c);
    }
  }

  return {
    name: data.name,
    class: data.class,
    level: data.level,
    race: data.race,
    ac: data.ac,
    hp: { current: hp.current as number, max: hp.max as number, temp: hp.temp as number },
    spell_slots: spellSlots,
    conditions,
  };
}
