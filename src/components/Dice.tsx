import React, { useState, useEffect } from "react";
import { Box, Text } from "ink";

const DIE_COLOR = "#CD853F";
const VALUE_COLOR = "#D2691E";
const ROLLING_COLOR = "#B8860B";
const LABEL_COLOR = "#8B4513";

const DIE_SYMBOLS: Record<number, string> = {
  4: "△",
  6: "▢",
  8: "◇",
  10: "⬨",
  12: "⬠",
  20: "⬡",
};

interface DieProps {
  sides: 4 | 6 | 8 | 10 | 12 | 20;
  value?: number;
  rolling?: boolean;
}

export function Die({ sides, value, rolling }: DieProps) {
  const [displayValue, setDisplayValue] = useState(value ?? sides);

  useEffect(() => {
    if (!rolling) {
      if (value !== undefined) setDisplayValue(value);
      return;
    }
    const interval = setInterval(() => {
      setDisplayValue(Math.floor(Math.random() * sides) + 1);
    }, 80);
    return () => clearInterval(interval);
  }, [rolling, value, sides]);

  const color = rolling ? ROLLING_COLOR : VALUE_COLOR;
  const symbol = DIE_SYMBOLS[sides];

  return (
    <Text color={color}>{symbol} {displayValue}</Text>
  );
}

// Demo component that shows all dice
interface DiceDemoProps {
  rolling?: boolean;
}

export function DiceDemo({ rolling }: DiceDemoProps) {
  const dice: Array<4 | 6 | 8 | 10 | 12 | 20> = [4, 6, 8, 10, 12, 20];

  return (
    <Box flexDirection="column" alignItems="center" paddingTop={1}>
      <Text color={DIE_COLOR} bold>{"⚀ D&D Dice Set ⚅"}</Text>
      <Text> </Text>
      <Box flexDirection="column" gap={1}>
        {dice.map((sides) => (
          <Die key={sides} sides={sides} rolling={rolling} />
        ))}
      </Box>
      <Text> </Text>
      {rolling && (
        <Text color={ROLLING_COLOR} italic>{"Rolling..."}</Text>
      )}
    </Box>
  );
}
