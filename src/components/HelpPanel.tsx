import React from "react";
import { Box, Text } from "ink";

const BORDER = "#8B4513";
const HEADER = "#B8860B";
const KEY_COLOR = "#CD853F";
const DESC_COLOR = "#D2691E";

const PANEL_WIDTH = 20;

interface HelpEntry {
  key: string;
  desc: string;
}

const HOTKEYS: HelpEntry[] = [
  { key: "Esc", desc: "Menu" },
  { key: "Ctrl+P", desc: "Characters" },
  { key: "Ctrl+O", desc: "Journal" },
  { key: "Ctrl+B", desc: "Verbose" },
  { key: "Ctrl+G", desc: "Toggle Help" },
];

const SCROLL: HelpEntry[] = [
  { key: "↑/↓", desc: "Line" },
  { key: "Shift+↑/↓", desc: "3 lines" },
  { key: "PgUp/Dn", desc: "Page" },
  { key: "Mouse", desc: "Scroll" },
];

function HelpRow({ entry }: { entry: HelpEntry }) {
  const pad = PANEL_WIDTH - 2 - entry.key.length - entry.desc.length;
  return (
    <Text>
      <Text color={KEY_COLOR}>{" " + entry.key}</Text>
      <Text>{" ".repeat(Math.max(1, pad))}</Text>
      <Text color={DESC_COLOR}>{entry.desc}</Text>
    </Text>
  );
}

export function HelpPanel() {
  return (
    <Box
      flexDirection="column"
      width={PANEL_WIDTH + 2}
      borderStyle="round"
      borderColor={BORDER}
    >
      <Box marginLeft={1}>
        <Text color={HEADER} bold>Help</Text>
      </Box>
      {HOTKEYS.map((entry) => (
        <HelpRow key={entry.key} entry={entry} />
      ))}
      <Text> </Text>
      <Text color={HEADER} bold> Scroll:</Text>
      {SCROLL.map((entry) => (
        <HelpRow key={entry.key} entry={entry} />
      ))}
    </Box>
  );
}
