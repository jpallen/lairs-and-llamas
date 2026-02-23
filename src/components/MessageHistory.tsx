import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Text, useInput } from "ink";
import type { ChatMessage, DiceRoll, ToolCallInfo } from "../types.js";
import { mouseEvents } from "../mouseFilter.js";
import { MarkdownLine } from "./Markdown.js";
import { DiceRollLine } from "./DiceRollLine.js";
import { stripDmThinking } from "../hooks/useClaudeSession.js";
import {
  formatMarkdown,
  MarkdownTableRow,
  MarkdownTableBorder,
} from "./MarkdownTable.js";

interface Props {
  messages: ChatMessage[];
  height: number;
  contentWidth: number;
  isProcessing: boolean;
  debugMode?: boolean;
  currentToolCall: ToolCallInfo | null;
  statusMessage?: string | null;
  scrollRevision?: number;
  isActive?: boolean;
}

interface Line {
  text: string;
  role: "user" | "assistant" | "thinking" | "dice" | "tool" | "blank" | "table-border" | "table-row" | "status";
  diceRoll?: DiceRoll;
  animate?: boolean;
  colWidths?: number[];
  borderPosition?: "top" | "middle" | "bottom";
  cells?: string[];
  isHeader?: boolean;
}

const USER_COLOR = "#CD853F";
const ASSISTANT_COLOR = "#D2691E";
const THINKING_COLOR = "#808080";
const SCROLL_LINES = 3;

function getStatusLabel(toolCall: ToolCallInfo | null, isThinking: boolean): string | null {
  if (isThinking) return "Thinking...";
  if (!toolCall) return null;
  const { toolName, input } = toolCall;
  const path = input ?? "";
  if (toolName === "Read" || toolName === "Glob" || toolName === "Grep") {
    if (/rules/i.test(path)) return "Reading rules...";
    if (/charactersheet/i.test(path)) return "Reading character sheets...";
    if (/journal/i.test(path)) return "Reading journal...";
    if (/combat\.md/i.test(path)) return "Reviewing the battlefield...";
    if (/campaign/i.test(path)) return "Reading campaign notes...";
    if (/system/i.test(path)) return "Reading system prompt...";
    return "Reading files...";
  }
  if (toolName === "Write" || toolName === "Edit") {
    if (/journal/i.test(path)) return "Updating journal...";
    if (/charactersheet/i.test(path)) return "Updating character sheets...";
    if (/combat\.md/i.test(path)) return "Tracking combat...";
    if (/campaign/i.test(path)) return "Updating campaign notes...";
    return "Writing files...";
  }
  if (toolName === "Bash") {
    if (/roll_dice/i.test(path)) return "Rolling dice...";
    return "Running command...";
  }
  if (toolName === "Task") return "Working on task...";
  return `${toolName}...`;
}

export function MessageHistory({ messages, height, contentWidth, isProcessing, debugMode, currentToolCall, statusMessage, scrollRevision = 0, isActive = true }: Props) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [lastUserMessageCount, setLastUserMessageCount] = useState(0);

  const allLines = useMemo(() => {
    const lines: Line[] = [];
    for (const msg of messages) {
      if (msg.role === "thinking") {
        if (!debugMode) continue;
        if (!msg.content && !msg.isStreaming) continue;
        if (lines.length > 0) {
          lines.push({ text: "", role: "blank" });
        }
        const wrapped = wordWrap(msg.content || "", contentWidth);
        for (const line of wrapped) {
          lines.push({ text: line, role: "thinking" });
        }
        continue;
      }

      if (msg.role === "tool") {
        if (!debugMode) continue;
        lines.push({ text: `${msg.toolName}: ${msg.content}`, role: "tool" });
        continue;
      }

      if (msg.role === "dice") {
        if (lines.length > 0) {
          lines.push({ text: "", role: "blank" });
        }
        for (const roll of msg.diceRolls ?? []) {
          lines.push({ text: "", role: "dice", diceRoll: roll, animate: msg.animate });
        }
        continue;
      }

      if (!msg.content && !msg.isStreaming) continue;

      if (msg.role === "assistant") {
        const displayContent = debugMode ? (msg.content || "") : stripDmThinking(msg.content || "");
        if (!displayContent && !msg.isStreaming) continue;
        if (lines.length > 0) {
          lines.push({ text: "", role: "blank" });
        }
        const formatted = formatMarkdown(displayContent, contentWidth);
        for (const fl of formatted) {
          if (fl.type === "table-border") {
            lines.push({ text: "", role: "table-border", colWidths: fl.colWidths, borderPosition: fl.position });
          } else if (fl.type === "table-row") {
            lines.push({ text: "", role: "table-row", cells: fl.cells, colWidths: fl.colWidths, isHeader: fl.isHeader });
          } else {
            lines.push({ text: fl.text, role: "assistant" });
          }
        }
      } else {
        if (lines.length > 0) {
          lines.push({ text: "", role: "blank" });
        }
        const wrapped = wordWrap(msg.content || "", contentWidth);
        for (const line of wrapped) {
          lines.push({ text: line, role: msg.role });
        }
      }
    }

    if (isProcessing || statusMessage) {
      const lastAssistant = [...messages].reverse().find(m => m.role === "assistant");
      const lastThinking = [...messages].reverse().find(m => m.role === "thinking");
      const hasVisibleContent = !!lastAssistant?.isStreaming &&
        stripDmThinking(lastAssistant.content || "").length > 0;
      const isStreamingAnything = !!lastAssistant?.isStreaming || !!lastThinking?.isStreaming;
      const isCurrentlyThinking = !hasVisibleContent && (
        !!lastThinking?.isStreaming ||
        (!!lastAssistant?.isStreaming && /<(?:thinking|hide)>/.test(lastAssistant.content || ""))
      );

      const statusLabel = statusMessage ?? getStatusLabel(
        isStreamingAnything ? null : currentToolCall,
        isCurrentlyThinking
      );
      if (statusLabel && !hasVisibleContent) {
        lines.push({ text: "", role: "blank" });
        lines.push({ text: statusLabel, role: "status" });
      }
    }

    return lines;
  }, [messages, contentWidth, debugMode, isProcessing, currentToolCall, statusMessage]);

  const maxOffset = Math.max(0, allLines.length - 1);

  const scrollUp = useCallback(
    (lines: number) => setScrollOffset((prev) => Math.max(0, prev - lines)),
    []
  );
  const scrollDown = useCallback(
    (lines: number) => setScrollOffset((prev) => Math.min(maxOffset, prev + lines)),
    [maxOffset]
  );

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

  // Snap to last user message when parent signals a scroll reset
  useEffect(() => {
    if (scrollRevision === 0) return;
    let lineIndex = 0;
    for (let i = allLines.length - 1; i >= 0; i--) {
      if (
        allLines[i].role === "user" &&
        allLines[i].text !== "" &&
        (i === 0 || allLines[i - 1].role !== "user")
      ) {
        lineIndex = i;
        break;
      }
    }
    setScrollOffset(lineIndex);
  }, [scrollRevision]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cmd+arrows and Shift+arrows always work (don't conflict with text input)
  // Plain arrows only scroll when processing (input bar is disabled)
  // PageUp/PageDown always work
  useInput((_input, key) => {
    if ((key.meta || key.shift) && key.upArrow) {
      scrollUp(SCROLL_LINES);
    } else if ((key.meta || key.shift) && key.downArrow) {
      scrollDown(SCROLL_LINES);
    } else if (isProcessing && key.upArrow) {
      scrollUp(1);
    } else if (isProcessing && key.downArrow) {
      scrollDown(1);
    }
    if (key.pageUp) {
      scrollUp(height);
    }
    if (key.pageDown) {
      scrollDown(height);
    }
  }, { isActive });

  // Mouse scroll support (events emitted by mouseFilter before Ink sees them)
  useEffect(() => {
    const handleScroll = (direction: "up" | "down") => {
      if (direction === "up") scrollUp(SCROLL_LINES);
      else scrollDown(SCROLL_LINES);
    };
    mouseEvents.on("scroll", handleScroll);
    return () => { mouseEvents.off("scroll", handleScroll); };
  }, [scrollUp, scrollDown]);

  const visibleLines = allLines.slice(scrollOffset, scrollOffset + height);

  const paddedLines: Line[] = [...visibleLines];
  while (paddedLines.length < height) {
    paddedLines.push({ text: "", role: "blank" });
  }

  return (
    <Box flexDirection="column" flexGrow={1} flexShrink={1} height={height}>
      {paddedLines.map((line, i) => (
        <Box key={`${scrollOffset}-${i}`} width={contentWidth}>
          {line.role === "dice" && line.diceRoll ? (
            <DiceRollLine roll={line.diceRoll} animate={line.animate} />
          ) : line.role === "table-border" && line.colWidths ? (
            <MarkdownTableBorder colWidths={line.colWidths} position={line.borderPosition!} />
          ) : line.role === "table-row" && line.cells && line.colWidths ? (
            <MarkdownTableRow cells={line.cells} colWidths={line.colWidths} isHeader={line.isHeader ?? false} baseColor={ASSISTANT_COLOR} />
          ) : line.role === "user" && line.text !== "" ? (
            <Box justifyContent="flex-end" width={contentWidth}>
              <Text color={USER_COLOR} bold>{line.text}</Text>
            </Box>
          ) : line.role === "assistant" && line.text !== "" ? (
            <MarkdownLine baseColor={ASSISTANT_COLOR}>{line.text}</MarkdownLine>
          ) : line.role === "thinking" && line.text !== "" ? (
            <Text color={THINKING_COLOR} dimColor>{line.text}</Text>
          ) : line.role === "tool" && line.text !== "" ? (
            <Text color={THINKING_COLOR} dimColor>  ◆ {line.text}</Text>
          ) : line.role === "status" ? (
            <Text color="#8B4513" dimColor>  ~ {line.text}</Text>
          ) : (
            <Text> </Text>
          )}
        </Box>
      ))}
    </Box>
  );
}

export function wordWrap(text: string, maxWidth: number): string[] {
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
