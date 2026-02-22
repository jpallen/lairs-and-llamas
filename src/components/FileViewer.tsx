import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Text, useInput } from "ink";
import { readFileSync } from "fs";
import { MarkdownLine } from "./Markdown.js";
import { mouseEvents } from "../mouseFilter.js";
import {
  formatMarkdown,
  MarkdownTableRow,
  MarkdownTableBorder,
  type FormattedLine,
} from "./MarkdownTable.js";

interface Props {
  filePath: string;
  title: string;
  height: number;
  contentWidth: number;
  scrollToEnd?: boolean;
  onClose: () => void;
}

const TITLE_COLOR = "#B8860B";
const CONTENT_COLOR = "#D2691E";
const HINT_COLOR = "#8B4513";
const SCROLL_LINES = 3;

export function FileViewer({ filePath, title, height, contentWidth, scrollToEnd, onClose }: Props) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const content = useMemo(() => {
    try {
      return readFileSync(filePath, "utf-8");
    } catch {
      return "File not found.";
    }
  }, [filePath]);

  const lines = useMemo(() => formatMarkdown(content, contentWidth), [content, contentWidth]);

  const footerHeight = 1;
  const titleHeight = 1;
  const separatorHeight = 1;
  const viewHeight = Math.max(1, height - titleHeight - separatorHeight - footerHeight);
  const maxOffset = Math.max(0, lines.length - 1);

  const scrollUp = useCallback(
    (n: number) => setScrollOffset((prev) => Math.max(0, prev - n)),
    []
  );
  const scrollDown = useCallback(
    (n: number) => setScrollOffset((prev) => Math.min(maxOffset, prev + n)),
    [maxOffset]
  );

  useEffect(() => {
    if (!initialized && scrollToEnd && lines.length > 0) {
      setScrollOffset(Math.max(0, lines.length - viewHeight));
      setInitialized(true);
    }
  }, [initialized, scrollToEnd, lines, viewHeight]);

  useInput((input, key) => {
    if (key.escape || input === "q") {
      onClose();
      return;
    }
    if (key.upArrow) scrollUp(1);
    if (key.downArrow) scrollDown(1);
    if (key.pageUp) scrollUp(viewHeight);
    if (key.pageDown) scrollDown(viewHeight);
    if (input === " " && key.shift) { scrollUp(viewHeight); return; }
    if (input === " ") scrollDown(viewHeight);
  });

  useEffect(() => {
    const handleScroll = (direction: "up" | "down") => {
      if (direction === "up") scrollUp(SCROLL_LINES);
      else scrollDown(SCROLL_LINES);
    };
    mouseEvents.on("scroll", handleScroll);
    return () => { mouseEvents.off("scroll", handleScroll); };
  }, [scrollUp, scrollDown]);

  const visibleLines = lines.slice(scrollOffset, scrollOffset + viewHeight);
  const paddedCount = Math.max(0, viewHeight - visibleLines.length);

  return (
    <Box flexDirection="column" height={height} width={contentWidth}>
      <Box justifyContent="center" width={contentWidth}>
        <Text color={TITLE_COLOR} bold>{title}</Text>
      </Box>
      <Text color={HINT_COLOR}>{"─".repeat(contentWidth)}</Text>
      <Box flexDirection="column" height={viewHeight}>
        {visibleLines.map((line, i) => (
          <Box key={`${scrollOffset}-${i}`} width={contentWidth}>
            {renderLine(line)}
          </Box>
        ))}
        {Array.from({ length: paddedCount }).map((_, i) => (
          <Box key={`pad-${i}`}><Text> </Text></Box>
        ))}
      </Box>
      <Box justifyContent="center" width={contentWidth}>
        <Text color={HINT_COLOR} dimColor>{"(↑↓/Space: scroll, Esc: close)"}</Text>
      </Box>
    </Box>
  );
}

function renderLine(line: FormattedLine): React.ReactNode {
  switch (line.type) {
    case "table-border":
      return <MarkdownTableBorder colWidths={line.colWidths} position={line.position} />;
    case "table-row":
      return <MarkdownTableRow cells={line.cells} colWidths={line.colWidths} isHeader={line.isHeader} />;
    case "text":
      return line.text ? (
        <MarkdownLine baseColor={CONTENT_COLOR}>{line.text}</MarkdownLine>
      ) : (
        <Text> </Text>
      );
  }
}
