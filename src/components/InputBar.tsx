import React, { useState, useRef } from "react";
import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSubmit: (text: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
}

const PROMPT_COLOR = "#B8860B"; // dark goldenrod

export function InputBar({ value, onChange, onSubmit, isProcessing, disabled }: Props) {
  const suppressRef = useRef(false);

  // Detect ctrl combos before ink-text-input appends the character
  useInput((_input, key) => {
    if (key.ctrl) {
      suppressRef.current = true;
    }
  }, { isActive: !isProcessing && !disabled });

  const handleChange = (text: string) => {
    if (suppressRef.current) {
      suppressRef.current = false;
      return;
    }
    onChange(text);
  };

  const handleSubmit = (text: string) => {
    if (!text.trim() || isProcessing) return;
    onSubmit(text.trim());
    onChange("");
  };

  return (
    <Box>
      <Text bold color={PROMPT_COLOR}>
        {isProcessing ? "..." : ">"}{" "}
      </Text>
      <TextInput
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        focus={!isProcessing && !disabled}
        placeholder={isProcessing ? "Claude is thinking..." : "Enter your action..."}
      />
    </Box>
  );
}
