import React, { useState, useEffect, useMemo } from "react";
import { Box, Text, useInput } from "ink";
import type { ChatMessage, DiceRoll } from "../types.js";
import { MarkdownLine } from "./Markdown.js";
import { DiceRollLine } from "./DiceRollLine.js";

interface Props {
  messages: ChatMessage[];
  height: number;
  contentWidth: number;
  isProcessing: boolean;
}

interface Line {
  text: string;
  role: "user" | "assistant" | "thinking" | "dice" | "blank";
  inCodeBlock?: boolean;
  diceRoll?: DiceRoll;
}

const USER_COLOR = "#CD853F";
const ASSISTANT_COLOR = "#D2691E";
const THINKING_COLOR = "#808080";

export function MessageHistory({ messages, height, contentWidth, isProcessing }: Props) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [lastUserMessageCount, setLastUserMessageCount] = useState(0);

  const allLines = useMemo(() => {
    const lines: Line[] = [];
    for (const msg of messages) {
      if (msg.role === "dice") {
        if (lines.length > 0) {
          lines.push({ text: "", role: "blank" });
        }
        for (const roll of msg.diceRolls ?? []) {
          lines.push({ text: "", role: "dice", diceRoll: roll });
        }
        continue;
      }

      if (!msg.content && !msg.isStreaming) continue;

      if (lines.length > 0) {
        lines.push({ text: "", role: "blank" });
      }

      if (msg.role === "assistant") {
        let inCodeBlock = false;
        for (const rawLine of (msg.content || "").split("\n")) {
          if (/^```/.test(rawLine)) {
            inCodeBlock = !inCodeBlock;
            lines.push({ text: rawLine, role: "assistant", inCodeBlock: true });
            continue;
          }
          const wrapped = wordWrap(rawLine, contentWidth);
          for (const w of wrapped) {
            lines.push({ text: w, role: "assistant", inCodeBlock });
          }
        }
      } else {
        const wrapped = wordWrap(msg.content || "", contentWidth);
        for (const line of wrapped) {
          lines.push({ text: line, role: msg.role });
        }
      }
    }
    return lines;
  }, [messages, contentWidth]);

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  useEffect(() => {
    if (userMessageCount > lastUserMessageCount && userMessageCount > 0) {
      let lineIndex = 0;
      let userMsgsSeen = 0;
      for (let i = 0; i < allLines.length; i++) {
        if (
          allLines[i].role === "user" &&
          allLines[i].text !== "" &&
          (i === 0 || allLines[i - 1].role !== "user")
        ) {
          userMsgsSeen++;
          if (userMsgsSeen === userMessageCount) {
            lineIndex = i;
            break;
          }
        }
      }
      setScrollOffset(lineIndex);
      setLastUserMessageCount(userMessageCount);
    }
  }, [userMessageCount, lastUserMessageCount, allLines]);

  useInput((_input, key) => {
    if (isProcessing) {
      if (key.upArrow) {
        setScrollOffset((prev) => Math.max(0, prev - 1));
      }
      if (key.downArrow) {
        setScrollOffset((prev) =>
          Math.min(Math.max(0, allLines.length - 1), prev + 1)
        );
      }
    }
    if (key.pageUp) {
      setScrollOffset((prev) => Math.max(0, prev - height));
    }
    if (key.pageDown) {
      setScrollOffset((prev) =>
        Math.min(Math.max(0, allLines.length - 1), prev + height)
      );
    }
  });

  const visibleLines = allLines.slice(scrollOffset, scrollOffset + height);

  const paddedLines: Line[] = [...visibleLines];
  while (paddedLines.length < height) {
    paddedLines.push({ text: "", role: "blank" });
  }

  return (
    <Box flexDirection="column" height={height}>
      {paddedLines.map((line, i) => (
        <Box key={`${scrollOffset}-${i}`} width={contentWidth}>
          {line.role === "dice" && line.diceRoll ? (
            <DiceRollLine roll={line.diceRoll} />
          ) : line.role === "user" && line.text !== "" ? (
            <Box justifyContent="flex-end" width={contentWidth}>
              <Text color={USER_COLOR} bold>{line.text}</Text>
            </Box>
          ) : line.role === "assistant" && line.text !== "" ? (
            line.inCodeBlock ? (
              <Text color="#B8860B">{line.text}</Text>
            ) : (
              <MarkdownLine baseColor={ASSISTANT_COLOR}>{line.text}</MarkdownLine>
            )
          ) : line.role === "thinking" && line.text !== "" ? (
            <Text color={THINKING_COLOR} dimColor>{line.text}</Text>
          ) : (
            <Text> </Text>
          )}
        </Box>
      ))}
    </Box>
  );
}

function wordWrap(text: string, maxWidth: number): string[] {
  if (!text) return [""];
  const result: string[] = [];
  for (const paragraph of text.split("\n")) {
    if (paragraph.length <= maxWidth) {
      result.push(paragraph);
      continue;
    }
    let remaining = paragraph;
    while (remaining.length > maxWidth) {
      let breakAt = remaining.lastIndexOf(" ", maxWidth);
      if (breakAt <= 0) breakAt = maxWidth;
      result.push(remaining.slice(0, breakAt));
      remaining = remaining.slice(breakAt).trimStart();
    }
    if (remaining) result.push(remaining);
  }
  return result;
}
