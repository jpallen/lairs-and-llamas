import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Text, useInput } from "ink";
import { readdirSync, readFileSync } from "fs";
import { join, basename } from "path";
import { MarkdownLine } from "./Markdown.js";
import { mouseEvents } from "../mouseFilter.js";
import {
  formatMarkdown,
  MarkdownTableRow,
  MarkdownTableBorder,
  type FormattedLine,
} from "./MarkdownTable.js";

interface Props {
  gameDir: string;
  height: number;
  contentWidth: number;
  onClose: () => void;
}

interface CharacterSheet {
  name: string;
  content: string;
}

interface Heading {
  label: string;
  level: number;
  lineIndex: number;
  hotkey: string;
}

const TAB_COLOR = "#CD853F";
const TAB_INACTIVE = "#8B4513";
const CONTENT_COLOR = "#D2691E";
const HEADING_KEY_COLOR = "#B8860B";
const SCROLL_LINES = 3;
const OUTLINE_WIDTH = 28;

export function CharacterSheetViewer({ gameDir, height, contentWidth, onClose }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const sheets = useMemo<CharacterSheet[]>(() => {
    const dir = join(gameDir, "CharacterSheets");
    try {
      const files = readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "template.md").sort();
      return files.map((f) => ({
        name: basename(f, ".md"),
        content: readFileSync(join(dir, f), "utf-8"),
      }));
    } catch {
      return [];
    }
  }, [gameDir]);

  const contentColumnWidth = contentWidth - OUTLINE_WIDTH - 1; // 1 for separator

  const lines = useMemo<FormattedLine[]>(() => {
    if (sheets.length === 0) return [{ type: "text", text: "No character sheets found." }];
    return formatMarkdown(sheets[activeTab].content, contentColumnWidth);
  }, [sheets, activeTab, contentColumnWidth]);

  // Extract headings from raw content and map to line indices
  const headings = useMemo<Heading[]>(() => {
    if (sheets.length === 0) return [];
    const raw = sheets[activeTab].content;
    const rawLines = raw.split("\n");
    const result: Heading[] = [];
    let hotkeyIdx = 0;

    for (const rawLine of rawLines) {
      const m2 = rawLine.match(/^##\s+(.+)/);
      const m3 = rawLine.match(/^###\s+(.+)/);
      if (!m2 && !m3) continue;
      const level = m2 ? 2 : 3;
      const label = (m2 ? m2[1] : m3![1]).trim();

      // Find matching line in formatted lines
      let lineIndex = 0;
      for (let j = 0; j < lines.length; j++) {
        const fl = lines[j];
        if (fl.type === "text" && fl.text) {
          // Heading text in formatted lines includes markdown markers like ## or bold markers
          const stripped = fl.text.replace(/^#+\s*/, "").replace(/\*\*/g, "").trim();
          if (stripped === label) {
            lineIndex = j;
            break;
          }
        }
      }

      let hotkey = "";
      if (level === 2) {
        let ch = String.fromCharCode(97 + hotkeyIdx);
        hotkeyIdx++;
        if (ch === "q") { ch = String.fromCharCode(97 + hotkeyIdx); hotkeyIdx++; }
        hotkey = ch;
      }
      if (hotkeyIdx > 26) break; // safety

      result.push({ label, level, lineIndex, hotkey });
    }
    return result;
  }, [sheets, activeTab, lines]);

  // Current heading based on scroll position
  const currentHeadingIdx = useMemo(() => {
    let current = -1;
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].lineIndex <= scrollOffset) current = i;
    }
    return current;
  }, [headings, scrollOffset]);

  // Reset scroll when switching tabs
  useEffect(() => {
    setScrollOffset(0);
  }, [activeTab]);

  // Layout: tab bar (1) + separator (1) + content + footer (1)
  const footerHeight = 1;
  const tabBarHeight = 1;
  const separatorHeight = 1;
  const contentHeight = Math.max(1, height - tabBarHeight - separatorHeight - footerHeight);

  const maxOffset = Math.max(0, lines.length - 1);

  const scrollUp = useCallback(
    (n: number) => setScrollOffset((prev) => Math.max(0, prev - n)),
    []
  );
  const scrollDown = useCallback(
    (n: number) => setScrollOffset((prev) => Math.min(maxOffset, prev + n)),
    [maxOffset]
  );

  useInput((input, key) => {
    if (key.escape) {
      onClose();
      return;
    }
    // Shift+Tab: previous tab
    if (key.tab && key.shift && sheets.length > 1) {
      setActiveTab((t) => (t - 1 + sheets.length) % sheets.length);
      return;
    }
    if (key.tab && sheets.length > 1) {
      setActiveTab((t) => (t + 1) % sheets.length);
      return;
    }
    // Left/Right arrows: cycle tabs
    if (key.leftArrow && !key.shift) {
      setActiveTab((t) => (t - 1 + sheets.length) % sheets.length);
      return;
    }
    if (key.rightArrow && !key.shift) {
      setActiveTab((t) => (t + 1) % sheets.length);
      return;
    }
    // Number keys to switch tabs
    const num = parseInt(input, 10);
    if (num >= 1 && num <= sheets.length) {
      setActiveTab(num - 1);
      return;
    }
    // q closes the viewer
    if (input === "q") {
      onClose();
      return;
    }
    // Letter hotkeys for heading jump
    if (/^[a-z]$/.test(input) && !key.ctrl && !key.meta) {
      const heading = headings.find((h) => h.hotkey === input);
      if (heading) {
        setScrollOffset(heading.lineIndex);
        return;
      }
    }
    if (key.upArrow) scrollUp(1);
    if (key.downArrow) scrollDown(1);
    if (key.pageUp) scrollUp(contentHeight);
    if (key.pageDown) scrollDown(contentHeight);
    if (input === " ") scrollDown(contentHeight);
  });

  // Mouse scroll
  useEffect(() => {
    const handleScroll = (direction: "up" | "down") => {
      if (direction === "up") scrollUp(SCROLL_LINES);
      else scrollDown(SCROLL_LINES);
    };
    mouseEvents.on("scroll", handleScroll);
    return () => { mouseEvents.off("scroll", handleScroll); };
  }, [scrollUp, scrollDown]);

  const visibleLines = lines.slice(scrollOffset, scrollOffset + contentHeight);
  const paddedCount = Math.max(0, contentHeight - visibleLines.length);

  return (
    <Box flexDirection="column" height={height} width={contentWidth}>
      {/* Tab bar */}
      <Box>
        {sheets.map((sheet, i) => (
          <Text key={sheet.name}>
            <Text color={i === activeTab ? TAB_COLOR : TAB_INACTIVE} bold={i === activeTab}>
              {` ${i + 1}:${sheet.name} `}
            </Text>
            {i < sheets.length - 1 && <Text color={TAB_INACTIVE}>|</Text>}
          </Text>
        ))}
      </Box>
      {/* Separator */}
      <Text color={TAB_INACTIVE}>{"─".repeat(contentWidth)}</Text>
      {/* Outline + Content */}
      <Box flexDirection="row" height={contentHeight}>
        {/* Outline sidebar */}
        <Box flexDirection="column" width={OUTLINE_WIDTH}>
          {headings.map((h, i) => {
            const isCurrent = i === currentHeadingIdx;
            if (h.level === 3) {
              return (
                <Text key={`h-${i}`} wrap="truncate">
                  <Text color={TAB_INACTIVE}>{"     · "}</Text>
                  <Text color={TAB_INACTIVE}>{h.label}</Text>
                </Text>
              );
            }
            return (
              <Text key={`h-${i}`} wrap="truncate">
                <Text color={HEADING_KEY_COLOR}>{`(${h.hotkey}) `}</Text>
                <Text color={isCurrent ? TAB_COLOR : TAB_INACTIVE} bold={isCurrent}>{h.label}</Text>
              </Text>
            );
          })}
        </Box>
        {/* Separator */}
        <Box width={1}>
          <Text color={TAB_INACTIVE}>│</Text>
        </Box>
        {/* Content */}
        <Box flexDirection="column" width={contentColumnWidth}>
          {visibleLines.map((line, i) => (
            <Box key={`${scrollOffset}-${i}`} width={contentColumnWidth}>
              {renderFormattedLine(line)}
            </Box>
          ))}
          {Array.from({ length: paddedCount }).map((_, i) => (
            <Box key={`pad-${i}`} width={contentColumnWidth}>
              <Text> </Text>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Footer */}
      <Box justifyContent="center" width={contentWidth}>
        <Text color={TAB_INACTIVE} dimColor>{"(Tab/←→: switch, a-z: jump, Space/↑↓: scroll, Esc: close)"}</Text>
      </Box>
    </Box>
  );
}

function renderFormattedLine(line: FormattedLine): React.ReactNode {
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
