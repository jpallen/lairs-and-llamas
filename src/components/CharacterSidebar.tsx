import React from "react";
import { Box, Text } from "ink";
import type { CharacterStats } from "../parseCharacterFrontMatter.js";

const BORDER = "#8B4513";
const NAME_COLOR = "#CD853F";
const STAT_COLOR = "#D2691E";
const LABEL_COLOR = "#B8860B";
const CONDITION_COLOR = "#CD853F";

const PANEL_WIDTH = 22;
const CONTENT_WIDTH = PANEL_WIDTH - 2; // minus paddingLeft + paddingRight

function hpBar(current: number, max: number, barLen: number): string {
  const filled = max > 0 ? Math.round((current / max) * barLen) : 0;
  const clamped = Math.max(0, Math.min(barLen, filled));
  return "█".repeat(clamped) + "░".repeat(barLen - clamped);
}

function SpellSlots({ slots }: { slots: Record<number, { total: number; used: number }> }) {
  const levels = Object.keys(slots)
    .map(Number)
    .sort((a, b) => a - b)
    .filter((l) => slots[l].total > 0);

  if (levels.length === 0) return null;

  return (
    <>
      <Text color={LABEL_COLOR}>Spell Slots</Text>
      {levels.map((l) => {
        const { total, used } = slots[l];
        const available = Math.max(0, total - used);
        return (
          <Text key={l}>
            <Text color={LABEL_COLOR}>{`L${l} `}</Text>
            <Text color={STAT_COLOR}>{"●".repeat(available)}{"○".repeat(used)}</Text>
          </Text>
        );
      })}
    </>
  );
}

function CharacterBlock({ stats }: { stats: CharacterStats }) {
  const levelStr = `L${stats.level}`;
  const hasSlots = Object.values(stats.spell_slots).some((s) => s.total > 0);

  const effectiveMax = stats.hp.max + stats.hp.temp;
  const hpStr = `${stats.hp.current}/${effectiveMax}`;
  // "HP " (3) + bar + " " (1) + hpStr
  const barLen = Math.max(4, CONTENT_WIDTH - 4 - hpStr.length);

  return (
    <Box flexDirection="column" paddingLeft={1} paddingRight={1}>
      <Box justifyContent="space-between">
        <Text color={NAME_COLOR} bold>{stats.name}</Text>
        <Text color={STAT_COLOR}>{levelStr}</Text>
      </Box>
      <Text color={STAT_COLOR}>{stats.race} {stats.class}</Text>
      <Text>
        <Text color={LABEL_COLOR}>{"HP "}</Text>
        <Text color={STAT_COLOR}>{hpBar(stats.hp.current, effectiveMax, barLen)}</Text>
        <Text color={STAT_COLOR}>{" " + hpStr}</Text>
      </Text>
      <Text>
        <Text color={LABEL_COLOR}>{"AC "}</Text>
        <Text color={STAT_COLOR}>{String(stats.ac)}</Text>
      </Text>
      {hasSlots && <SpellSlots slots={stats.spell_slots} />}
      {stats.conditions.length > 0 && (
        <Box paddingLeft={0}>
          <Text color={CONDITION_COLOR} dimColor>{stats.conditions.join(", ")}</Text>
        </Box>
      )}
    </Box>
  );
}

interface CharacterSidebarProps {
  stats: CharacterStats[];
  height: number;
}

export function CharacterSidebar({ stats, height }: CharacterSidebarProps) {
  return (
    <Box
      flexDirection="column"
      width={PANEL_WIDTH + 2}
      height={height}
      borderStyle="round"
      borderColor={BORDER}
    >
      {stats.map((s, i) => (
        <React.Fragment key={s.name}>
          {i > 0 && (
            <Text color={BORDER}>{"─".repeat(PANEL_WIDTH)}</Text>
          )}
          <CharacterBlock stats={s} />
        </React.Fragment>
      ))}
    </Box>
  );
}
