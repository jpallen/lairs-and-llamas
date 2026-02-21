import React, { useState } from "react";
import { Box, Text, useInput } from "ink";

interface MenuItem {
  label: string;
  action: string;
}

interface MenuOverlayProps {
  title: string;
  items: MenuItem[];
  onSelect: (action: string) => void;
  onClose: () => void;
  height: number;
  width: number;
}

export function MenuOverlay({ title, items, onSelect, onClose, height, width }: MenuOverlayProps) {
  const [cursor, setCursor] = useState(0);

  useInput((_input, key) => {
    if (key.escape) {
      onClose();
      return;
    }
    if (key.upArrow) {
      setCursor((c) => (c <= 0 ? items.length - 1 : c - 1));
    }
    if (key.downArrow) {
      setCursor((c) => (c >= items.length - 1 ? 0 : c + 1));
    }
    if (key.return) {
      onSelect(items[cursor].action);
    }
  });

  // Calculate padding to vertically center menu items
  const contentLines = 1 + 1 + items.length + 1 + 1; // title + gap + items + gap + hint
  const topPad = Math.max(0, Math.floor((height - contentLines) / 2));

  return (
    <Box flexDirection="column" height={height} width={width}>
      {Array.from({ length: topPad }).map((_, i) => (
        <Text key={`pad-${i}`}> </Text>
      ))}
      <Box justifyContent="center" width={width}>
        <Text color="#B8860B" bold>{title}</Text>
      </Box>
      <Text> </Text>
      {items.map((item, i) => (
        <Box key={item.action} justifyContent="center" width={width}>
          <Text color={i === cursor ? "#CD853F" : "#8B4513"}>
            {i === cursor ? "> " : "  "}{item.label}
          </Text>
        </Box>
      ))}
      <Text> </Text>
      <Box justifyContent="center" width={width}>
        <Text color="#8B4513" dimColor>{"(Esc to close)"}</Text>
      </Box>
    </Box>
  );
}
