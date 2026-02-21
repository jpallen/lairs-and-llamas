import React from "react";
import { Box, Text } from "ink";

interface Props {
  height: number;
}

const BORDER = "#8B4513";
const HEADER = "#B8860B";
const KEY_COLOR = "#CD853F";
const DESC_COLOR = "#D2691E";

const PANEL_WIDTH = 24;

interface HelpEntry {
  key: string;
  desc: string;
}

const HOTKEYS: HelpEntry[] = [
  { key: "Esc", desc: "Menu" },
  { key: "Ctrl+P", desc: "Characters" },
  { key: "Ctrl+H", desc: "Toggle Help" },
];

const SCROLL: HelpEntry[] = [
  { key: "↑/↓", desc: "Line" },
  { key: "Shift+↑/↓", desc: "3 lines" },
  { key: "PgUp/Dn", desc: "Page" },
  { key: "Mouse", desc: "Scroll" },
];

function HelpRow({ entry }: { entry: HelpEntry }) {
  const pad = PANEL_WIDTH - 4 - entry.key.length - entry.desc.length;
  return (
    <Text>
      <Text color={KEY_COLOR}>{" " + entry.key}</Text>
      <Text>{" ".repeat(Math.max(1, pad))}</Text>
      <Text color={DESC_COLOR}>{entry.desc}</Text>
    </Text>
  );
}

export function HelpPanel({ height }: Props) {
  const contentLines = HOTKEYS.length + 1 + SCROLL.length + 1; // +1 for blank, +1 for "Scroll:" header
  const topPad = Math.max(0, Math.floor((height - 2 - contentLines) / 2));
  const bottomPad = Math.max(0, height - 2 - contentLines - topPad);

  return (
    <Box
      flexDirection="column"
      width={PANEL_WIDTH + 2}
      height={height}
      borderStyle="round"
      borderColor={BORDER}
    >
      {/* Title */}
      <Box marginLeft={1}>
        <Text color={HEADER} bold>Help</Text>
      </Box>
      {/* Top padding */}
      {Array.from({ length: topPad }).map((_, i) => (
        <Text key={`tp-${i}`}> </Text>
      ))}
      {/* Hotkeys */}
      {HOTKEYS.map((entry) => (
        <HelpRow key={entry.key} entry={entry} />
      ))}
      {/* Blank line + Scroll header */}
      <Text> </Text>
      <Text color={HEADER} bold> Scroll:</Text>
      {SCROLL.map((entry) => (
        <HelpRow key={entry.key} entry={entry} />
      ))}
      {/* Bottom padding */}
      {Array.from({ length: bottomPad }).map((_, i) => (
        <Text key={`bp-${i}`}> </Text>
      ))}
    </Box>
  );
}
