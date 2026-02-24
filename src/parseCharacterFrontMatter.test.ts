import { describe, it, expect } from "vitest";
import { parseCharacterFrontMatter } from "./parseCharacterFrontMatter.js";

describe("parseCharacterFrontMatter", () => {
  it("parses a complete front matter block", () => {
    const content = `---
name: Aldric
class: Fighter
level: 3
race: Human
ac: 18
hp: { current: 25, max: 30, temp: 0 }
spell_slots:
  1: { total: 3, used: 1 }
  2: { total: 2, used: 0 }
conditions: [Poisoned]
---

# Aldric
Some markdown body here.
`;
    const result = parseCharacterFrontMatter(content);
    expect(result).toEqual({
      name: "Aldric",
      class: "Fighter",
      level: 3,
      race: "Human",
      ac: 18,
      hp: { current: 25, max: 30, temp: 0 },
      spell_slots: {
        1: { total: 3, used: 1 },
        2: { total: 2, used: 0 },
      },
      conditions: ["Poisoned"],
    });
  });

  it("parses a non-caster with no spell_slots", () => {
    const content = `---
name: Brynn
class: Barbarian
level: 5
race: Half-Orc
ac: 16
hp: { current: 50, max: 50, temp: 0 }
conditions: []
---

# Brynn
`;
    const result = parseCharacterFrontMatter(content);
    expect(result).not.toBeNull();
    expect(result!.spell_slots).toEqual({});
    expect(result!.conditions).toEqual([]);
  });

  it("returns null for content without front matter", () => {
    const content = `# Just a Heading\nSome text.`;
    expect(parseCharacterFrontMatter(content)).toBeNull();
  });

  it("returns null for malformed YAML", () => {
    const content = `---
name: [invalid
---

# Test
`;
    expect(parseCharacterFrontMatter(content)).toBeNull();
  });

  it("returns null when required fields are missing", () => {
    const content = `---
name: Test
class: Fighter
---

# Test
`;
    expect(parseCharacterFrontMatter(content)).toBeNull();
  });

  it("handles multiple conditions", () => {
    const content = `---
name: Pip
class: Rogue
level: 2
race: Halfling
ac: 14
hp: { current: 10, max: 18, temp: 5 }
conditions: [Blinded, Prone]
---
`;
    const result = parseCharacterFrontMatter(content);
    expect(result).not.toBeNull();
    expect(result!.conditions).toEqual(["Blinded", "Prone"]);
    expect(result!.hp.temp).toBe(5);
  });
});
