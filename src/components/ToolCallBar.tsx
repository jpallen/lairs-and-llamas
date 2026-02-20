import React from "react";
import { Box, Text } from "ink";
import type { ToolCallInfo } from "../types.js";

interface Props {
  toolCall: ToolCallInfo;
  width: number;
}

const TOOL_COLOR = "#8B4513"; // saddle brown

export function ToolCallBar({ toolCall, width }: Props) {
  const label = toolCall.input
    ? `${toolCall.toolName}: ${toolCall.input}`
    : toolCall.toolName;

  const maxLen = width - 4;
  const display =
    label.length > maxLen ? label.slice(0, maxLen - 3) + "..." : label;

  return (
    <Box width={width}>
      <Text color={TOOL_COLOR} dimColor>  ~ {display}</Text>
    </Box>
  );
}
