import React, { useState } from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";

interface Props {
  onSubmit: (text: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
}

const PROMPT_COLOR = "#B8860B"; // dark goldenrod

export function InputBar({ onSubmit, isProcessing, disabled }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (text: string) => {
    if (!text.trim() || isProcessing) return;
    onSubmit(text.trim());
    setValue("");
  };

  return (
    <Box>
      <Text bold color={PROMPT_COLOR}>
        {isProcessing ? "..." : ">"}{" "}
      </Text>
      <TextInput
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        focus={!isProcessing && !disabled}
        placeholder={isProcessing ? "Claude is thinking..." : "Enter your action..."}
      />
    </Box>
  );
}
