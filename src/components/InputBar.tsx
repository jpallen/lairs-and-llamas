import React, { useState, useEffect } from "react";
import { Box, Text, useInput } from "ink";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSubmit: (text: string) => void;
  isProcessing: boolean;
  disabled?: boolean;
  maxWidth: number;
}

const PROMPT_COLOR = "#B8860B"; // dark goldenrod
const INPUT_COLOR = "#CD853F"; // peru
const PLACEHOLDER_COLOR = "#8B4513";
const PROMPT_WIDTH = 2; // "> " or ". "
const MAX_INPUT_LINES = 5;

interface VisualLine {
  text: string;
  startOffset: number;
  isTerminal: boolean; // ends at \n or end of text (not a wrap break)
}

function computeVisualLines(text: string, width: number): VisualLine[] {
  if (!text) return [{ text: "", startOffset: 0, isTerminal: true }];

  const lines: VisualLine[] = [];
  const logicalLines = text.split("\n");
  let offset = 0;

  for (const ll of logicalLines) {
    if (ll.length === 0) {
      lines.push({ text: "", startOffset: offset, isTerminal: true });
    } else {
      let i = 0;
      while (i < ll.length) {
        const end = Math.min(i + width, ll.length);
        lines.push({
          text: ll.slice(i, end),
          startOffset: offset + i,
          isTerminal: end >= ll.length,
        });
        i = end;
      }
    }
    offset += ll.length + 1; // +1 for \n
  }

  return lines;
}

function findCursorLine(visualLines: VisualLine[], cursorPos: number): number {
  for (let i = 0; i < visualLines.length; i++) {
    const vl = visualLines[i];
    const lineEnd = vl.startOffset + vl.text.length;
    if (cursorPos < lineEnd) return i;
    if (cursorPos === lineEnd && vl.isTerminal) return i;
  }
  return visualLines.length - 1;
}

export function getInputHeight(value: string, maxWidth: number): number {
  const textWidth = Math.max(1, maxWidth - PROMPT_WIDTH);
  if (!value) return 1;
  const lines = computeVisualLines(value, textWidth);
  return Math.min(MAX_INPUT_LINES, lines.length);
}

export function InputBar({ value, onChange, onSubmit, isProcessing, disabled, maxWidth }: Props) {
  const [cursorPos, setCursorPos] = useState(0);

  // Keep cursor in bounds when value changes externally (e.g. cleared on submit)
  useEffect(() => {
    if (cursorPos > value.length) setCursorPos(value.length);
  }, [value, cursorPos]);

  const textWidth = Math.max(1, maxWidth - PROMPT_WIDTH);

  useInput((input, key) => {
    if (isProcessing || disabled) return;

    // Shift+Enter (kitty protocol terminals) or raw \n (Ctrl+J / some Shift+Enter)
    if ((key.return && key.shift) || (input === "\n" && !key.return)) {
      const newVal = value.slice(0, cursorPos) + "\n" + value.slice(cursorPos);
      onChange(newVal);
      setCursorPos(cursorPos + 1);
      return;
    }

    // Enter: submit
    if (key.return) {
      if (!value.trim()) return;
      onSubmit(value.trim());
      onChange("");
      setCursorPos(0);
      return;
    }

    // Backspace
    if (key.backspace || key.delete) {
      if (cursorPos > 0) {
        onChange(value.slice(0, cursorPos - 1) + value.slice(cursorPos));
        setCursorPos(cursorPos - 1);
      }
      return;
    }

    // Arrow keys
    if (key.leftArrow) {
      setCursorPos(Math.max(0, cursorPos - 1));
      return;
    }
    if (key.rightArrow) {
      setCursorPos(Math.min(value.length, cursorPos + 1));
      return;
    }

    // Up/down: move between visual lines
    if (key.upArrow || key.downArrow) {
      const vLines = computeVisualLines(value, textWidth);
      const currentLine = findCursorLine(vLines, cursorPos);
      const localCol = cursorPos - vLines[currentLine].startOffset;

      if (key.upArrow && currentLine > 0) {
        const target = vLines[currentLine - 1];
        setCursorPos(target.startOffset + Math.min(localCol, target.text.length));
      } else if (key.downArrow && currentLine < vLines.length - 1) {
        const target = vLines[currentLine + 1];
        setCursorPos(target.startOffset + Math.min(localCol, target.text.length));
      }
      return;
    }

    // Skip ctrl/meta combos, tab, escape
    if (key.ctrl || key.meta || key.tab || key.escape) return;

    // Regular character input
    if (input) {
      onChange(value.slice(0, cursorPos) + input + value.slice(cursorPos));
      setCursorPos(cursorPos + input.length);
    }
  }, { isActive: !isProcessing && !disabled });

  const showCursor = !isProcessing && !disabled;
  const isPlaceholder = !value;
  const displayText = value || (isProcessing ? "Claude is thinking..." : "Enter your action...");

  const visualLines = computeVisualLines(isPlaceholder ? displayText : value, textWidth);
  const visibleLines = visualLines.slice(0, MAX_INPUT_LINES);
  const cursorLineIdx = isPlaceholder ? -1 : findCursorLine(visualLines, cursorPos);

  return (
    <Box flexDirection="column">
      {visibleLines.map((vl, i) => (
        <Box key={i} width={maxWidth}>
          <Text bold color={PROMPT_COLOR}>
            {i === 0 ? (isProcessing ? ". " : "> ") : "  "}
          </Text>
          {isPlaceholder ? (
            <Text color={PLACEHOLDER_COLOR} dimColor>{vl.text}</Text>
          ) : i === cursorLineIdx && showCursor ? (
            (() => {
              const localPos = cursorPos - vl.startOffset;
              const before = vl.text.slice(0, localPos);
              const cursorChar = localPos < vl.text.length ? vl.text[localPos] : " ";
              const after = localPos < vl.text.length ? vl.text.slice(localPos + 1) : "";
              return (
                <Text color={INPUT_COLOR}>
                  {before}<Text inverse>{cursorChar}</Text>{after}
                </Text>
              );
            })()
          ) : (
            <Text color={INPUT_COLOR}>{vl.text}</Text>
          )}
        </Box>
      ))}
    </Box>
  );
}
