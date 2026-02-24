import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Text, useInput } from "ink";
import { readdirSync, readFileSync, existsSync } from "fs";
import { join, basename } from "path";
import { MarkdownLine } from "./Markdown.js";
import { mouseEvents } from "../mouseFilter.js";
import {
  formatMarkdown,
  MarkdownTableRow,
  MarkdownTableBorder,
  type FormattedLine,
} from "./MarkdownTable.js";
import { parseCharacterFrontMatter, type CharacterStats } from "../parseCharacterFrontMatter.js";

export interface CharacterSheetState {
  activeTab: number;
  scrollOffset: number;
}

interface Props {
  gameDir: string;
  height: number;
  contentWidth: number;
  initialState?: CharacterSheetState;
  onClose: () => void;
  onViewSpell?: (spellName: string, state: CharacterSheetState) => void;
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
const SPELL_COLOR = "#B8860B";
const SCROLL_LINES = 3;
const OUTLINE_WIDTH = 28;

const STAT_LABEL_COLOR = "#B8860B";
const STAT_VALUE_COLOR = "#D2691E";
const CONDITION_COLOR = "#CD853F";

function hpBar(current: number, max: number, width: number): string {
  const filled = max > 0 ? Math.round((current / max) * width) : 0;
  const clamped = Math.max(0, Math.min(width, filled));
  return "█".repeat(clamped) + "░".repeat(width - clamped);
}

function StatsHeader({ stats, width }: { stats: CharacterStats; width: number }) {
  const hasSlots = Object.values(stats.spell_slots).some((s) => s.total > 0);
  const slotGroups = Object.keys(stats.spell_slots)
    .map(Number)
    .sort((a, b) => a - b)
    .filter((l) => stats.spell_slots[l].total > 0)
    .map((l) => {
      const { total, used } = stats.spell_slots[l];
      const available = Math.max(0, total - used);
      return `L${l}:${"●".repeat(available)}${"○".repeat(used)}`;
    });

  return (
    <Box flexDirection="column" width={width}>
      <Box>
        <Text color={TAB_COLOR} bold>{stats.name}</Text>
        <Text color={STAT_VALUE_COLOR}>{` — ${stats.race} ${stats.class} L${stats.level}`}</Text>
      </Box>
      <Box>
        <Text color={STAT_LABEL_COLOR}>{"HP "}</Text>
        <Text color={STAT_VALUE_COLOR}>{hpBar(stats.hp.current, stats.hp.max, 15)}</Text>
        <Text color={STAT_VALUE_COLOR}>{` ${stats.hp.current}/${stats.hp.max}`}</Text>
        {stats.hp.temp > 0 && <Text color={STAT_VALUE_COLOR}>{` (+${stats.hp.temp} temp)`}</Text>}
        <Text color={STAT_VALUE_COLOR}>{"  "}</Text>
        <Text color={STAT_LABEL_COLOR}>{"AC "}</Text>
        <Text color={STAT_VALUE_COLOR}>{String(stats.ac)}</Text>
        {hasSlots && (
          <>
            <Text color={STAT_VALUE_COLOR}>{"  "}</Text>
            <Text color={STAT_LABEL_COLOR}>{"Slots "}</Text>
            <Text color={STAT_VALUE_COLOR}>{slotGroups.join(" ")}</Text>
          </>
        )}
      </Box>
      {stats.conditions.length > 0 && (
        <Text color={CONDITION_COLOR} dimColor>{"Conditions: " + stats.conditions.join(", ")}</Text>
      )}
      <Text color={TAB_INACTIVE}>{"─".repeat(width)}</Text>
    </Box>
  );
}

export function CharacterSheetViewer({ gameDir, height, contentWidth, initialState, onClose, onViewSpell }: Props) {
  const [activeTab, setActiveTab] = useState(initialState?.activeTab ?? 0);
  const [scrollOffset, setScrollOffset] = useState(initialState?.scrollOffset ?? 0);
  const [spellBrowseMode, setSpellBrowseMode] = useState(false);
  const [spellCursor, setSpellCursor] = useState(0);

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

  const activeStats = useMemo<CharacterStats | null>(() => {
    if (sheets.length === 0) return null;
    return parseCharacterFrontMatter(sheets[activeTab].content);
  }, [sheets, activeTab]);

  // Stats header: name+info line + hp/ac/slots line + separator line = 3, +1 if conditions
  const statsHeaderHeight = activeStats ? (3 + (activeStats.conditions.length > 0 ? 1 : 0)) : 0;

  const lines = useMemo<FormattedLine[]>(() => {
    if (sheets.length === 0) return [{ type: "text", text: "No character sheets found." }];
    const raw = sheets[activeTab].content.replace(/^---\n[\s\S]*?\n---\n*/, "");
    return formatMarkdown(raw, contentColumnWidth);
  }, [sheets, activeTab, contentColumnWidth]);

  // Load known spell filenames for matching: Map<lowercase, originalCase>
  const knownSpells = useMemo<Map<string, string>>(() => {
    const spellDir = join(gameDir, "Rules", "Spells");
    if (!existsSync(spellDir)) return new Map();
    try {
      const map = new Map<string, string>();
      for (const f of readdirSync(spellDir)) {
        if (f.endsWith(".md") && !f.startsWith("#")) {
          const name = basename(f, ".md");
          map.set(name.toLowerCase(), name);
        }
      }
      return map;
    } catch {
      return new Map();
    }
  }, [gameDir]);

  // Detect spell lines: for each known spell name, find formatted lines that contain it
  const spellLines = useMemo<{ lineIndex: number; spellName: string }[]>(() => {
    if (knownSpells.size === 0) return [];
    const result: { lineIndex: number; spellName: string }[] = [];
    const matched = new Set<number>();
    for (const [lowerName, displayName] of knownSpells) {
      const pattern = new RegExp(`\\b${lowerName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      for (let j = 0; j < lines.length; j++) {
        if (matched.has(j)) continue;
        const fl = lines[j];
        if (fl.type !== "text" || !fl.text) continue;
        if (pattern.test(fl.text)) {
          result.push({ lineIndex: j, spellName: displayName });
          matched.add(j);
        }
      }
    }
    result.sort((a, b) => a.lineIndex - b.lineIndex);
    return result;
  }, [knownSpells, lines]);

  // Map line index -> spell name for highlighting
  const spellLineMap = useMemo(
    () => new Map(spellLines.map((s) => [s.lineIndex, s.spellName])),
    [spellLines]
  );

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
        if (ch === "q" || ch === "s") { ch = String.fromCharCode(97 + hotkeyIdx); hotkeyIdx++; }
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

  // Reset scroll and spell browse mode when switching tabs
  useEffect(() => {
    setScrollOffset(0);
    setSpellBrowseMode(false);
    setSpellCursor(0);
  }, [activeTab]);

  // Layout: tab bar (1) + separator (1) + stats header + content + footer (1)
  const footerHeight = 1;
  const tabBarHeight = 1;
  const separatorHeight = 1;
  const contentHeight = Math.max(1, height - tabBarHeight - separatorHeight - statsHeaderHeight - footerHeight);

  const maxOffset = Math.max(0, lines.length - 1);

  const scrollUp = useCallback(
    (n: number) => setScrollOffset((prev) => Math.max(0, prev - n)),
    []
  );
  const scrollDown = useCallback(
    (n: number) => setScrollOffset((prev) => Math.min(maxOffset, prev + n)),
    [maxOffset]
  );

  // Keep spell cursor line visible
  useEffect(() => {
    if (spellBrowseMode && spellLines.length > 0 && spellCursor < spellLines.length) {
      const targetLine = spellLines[spellCursor].lineIndex;
      if (targetLine < scrollOffset) {
        setScrollOffset(targetLine);
      } else if (targetLine >= scrollOffset + contentHeight) {
        setScrollOffset(targetLine - contentHeight + 1);
      }
    }
  }, [spellBrowseMode, spellCursor, spellLines, scrollOffset, contentHeight]);

  useInput((input, key) => {
    if (spellBrowseMode) {
      if (key.escape || input === "s") {
        setSpellBrowseMode(false);
        return;
      }
      if (key.upArrow) {
        setSpellCursor((c) => Math.max(0, c - 1));
        return;
      }
      if (key.downArrow) {
        setSpellCursor((c) => Math.min(spellLines.length - 1, c + 1));
        return;
      }
      if (key.return && onViewSpell && spellLines.length > 0) {
        onViewSpell(spellLines[spellCursor].spellName, { activeTab, scrollOffset });
        return;
      }
      return;
    }

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
    // s enters spell browse mode (if spells exist)
    if (input === "s" && !key.ctrl && !key.meta && spellLines.length > 0 && onViewSpell) {
      // Start at the first spell at or below the current scroll position
      const startIdx = spellLines.findIndex((s) => s.lineIndex >= scrollOffset);
      setSpellBrowseMode(true);
      setSpellCursor(startIdx >= 0 ? startIdx : spellLines.length - 1);
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
    if (input === " " && key.shift) { scrollUp(contentHeight); return; }
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

  // Current spell cursor line index (absolute)
  const spellCursorLineIndex = spellBrowseMode && spellLines.length > 0
    ? spellLines[spellCursor].lineIndex
    : -1;

  const hasSpells = spellLines.length > 0 && !!onViewSpell;
  const footerText = spellBrowseMode
    ? "(s: exit spell mode, ↑↓: navigate spells, Enter: view, Esc: back)"
    : hasSpells
      ? "(Tab/←→: switch, a-z: jump, s: spells, Space/↑↓: scroll, Esc: close)"
      : "(Tab/←→: switch, a-z: jump, Space/↑↓: scroll, Esc: close)";

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
      {/* Stats header from YAML front matter */}
      {activeStats && <StatsHeader stats={activeStats} width={contentWidth} />}
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
          {visibleLines.map((line, i) => {
            const absoluteIndex = scrollOffset + i;
            const spellName = spellLineMap.get(absoluteIndex);
            const isSpellCursorLine = absoluteIndex === spellCursorLineIndex;
            return (
              <Box key={`${scrollOffset}-${i}`} width={contentColumnWidth}>
                {renderFormattedLine(line, spellName, isSpellCursorLine)}
              </Box>
            );
          })}
          {Array.from({ length: paddedCount }).map((_, i) => (
            <Box key={`pad-${i}`} width={contentColumnWidth}>
              <Text> </Text>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Footer */}
      <Box justifyContent="center" width={contentWidth}>
        <Text color={TAB_INACTIVE} dimColor>{footerText}</Text>
      </Box>
    </Box>
  );
}

function renderFormattedLine(line: FormattedLine, spellName?: string, isSpellCursor?: boolean): React.ReactNode {
  switch (line.type) {
    case "table-border":
      return <MarkdownTableBorder colWidths={line.colWidths} position={line.position} />;
    case "table-row":
      return <MarkdownTableRow cells={line.cells} colWidths={line.colWidths} isHeader={line.isHeader} />;
    case "text": {
      if (!line.text) return <Text> </Text>;
      if (spellName) {
        return <SpellHighlightLine text={line.text} spellName={spellName} isCursor={!!isSpellCursor} />;
      }
      return <MarkdownLine baseColor={CONTENT_COLOR}>{line.text}</MarkdownLine>;
    }
  }
}

function SpellHighlightLine({ text, spellName, isCursor }: { text: string; spellName: string; isCursor: boolean }) {
  const pattern = new RegExp(`(\\b${spellName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b)`, "i");
  const parts = text.split(pattern);
  const bgColor = isCursor ? TAB_COLOR : SPELL_COLOR;

  return (
    <Text>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <Text key={i} color="#1a1a1a" backgroundColor={bgColor} bold={isCursor}>{part}</Text>
        ) : (
          <Text key={i} color={CONTENT_COLOR}>{part}</Text>
        )
      )}
    </Text>
  );
}

