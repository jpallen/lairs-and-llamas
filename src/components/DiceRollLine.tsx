import React, { useState, useEffect, useRef } from "react";
import { Box, Text } from "ink";
import type { DiceRoll } from "../types.js";

const DIE_COLOR = "#CD853F";
const VALUE_COLOR = "#D2691E";
const ROLLING_COLOR = "#B8860B";

const DIE_SYMBOLS: Record<number, string> = {
  4: "△",
  6: "▢",
  8: "◇",
  10: "⬨",
  12: "⬠",
  20: "⬡",
};

const ROLL_DURATION = 1200; // ms of rolling animation
const ROLL_INTERVAL = 80;   // ms between random number changes

interface Props {
  roll: DiceRoll;
  animate?: boolean;
}

export function DiceRollLine({ roll, animate }: Props) {
  const [phase, setPhase] = useState<"rolling" | "settled">(
    animate ? "rolling" : "settled"
  );
  const [displayValues, setDisplayValues] = useState<number[]>(
    animate
      ? roll.values.map(() => Math.floor(Math.random() * roll.sides) + 1)
      : roll.values
  );
  const mountTime = useRef(Date.now());

  useEffect(() => {
    if (phase === "settled") return;

    const interval = setInterval(() => {
      if (Date.now() - mountTime.current > ROLL_DURATION) {
        setDisplayValues(roll.values);
        setPhase("settled");
        clearInterval(interval);
        return;
      }
      setDisplayValues(
        roll.values.map(() => Math.floor(Math.random() * roll.sides) + 1)
      );
    }, ROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [phase, roll]);

  const symbol = DIE_SYMBOLS[roll.sides] ?? "?";
  const color = phase === "rolling" ? ROLLING_COLOR : VALUE_COLOR;

  return (
    <Text>
      <Text color={DIE_COLOR}>{roll.label}: </Text>
      {displayValues.map((val, i) => (
        <Text key={i}>
          <Text color={color}>{symbol} {val}</Text>
          {i < displayValues.length - 1 && <Text color={DIE_COLOR}>, </Text>}
        </Text>
      ))}
      {displayValues.length > 1 && (
        <>
          <Text color={DIE_COLOR}> = </Text>
          <Text color={color} bold>
            {phase === "rolling"
              ? displayValues.reduce((a, b) => a + b, 0)
              : roll.total}
          </Text>
        </>
      )}
    </Text>
  );
}
