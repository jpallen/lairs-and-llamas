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
  initialSpell?: string;
  onClose: () => void;
}

interface SpellEntry {
  name: string;
  filename: string;
  level: string; // "cantrip", "1st", "2nd", ..., "9th"
  levelNum: number; // 0 for cantrip, 1-9
  school: string;
  content: string;
}

interface ListItem {
  type: "spell" | "header";
  label: string;
  spellIndex?: number; // index into spells array
  levelLabel?: string; // short label like "3rd" for right-align
}

type TabMode = "alpha" | "class" | "level";
const TAB_LABELS: { mode: TabMode; label: string }[] = [
  { mode: "alpha", label: "Alphabetical" },
  { mode: "class", label: "By Class" },
  { mode: "level", label: "By Level" },
];

const TAB_COLOR = "#CD853F";
const TAB_INACTIVE = "#8B4513";
const CONTENT_COLOR = "#D2691E";
const CURSOR_COLOR = "#CD853F";
const SCROLL_LINES = 3;
const LIST_WIDTH = 30;

function parseLevelFromItalic(content: string): { level: string; levelNum: number; school: string } {
  const match = content.match(/\*(\w+)-level (\w+)\*/i);
  if (match) {
    const levelNum = parseInt(match[1], 10) || { "1st": 1, "2nd": 2, "3rd": 3, "4th": 4, "5th": 5, "6th": 6, "7th": 7, "8th": 8, "9th": 9 }[match[1].toLowerCase()] || 0;
    return { level: match[1].toLowerCase(), levelNum, school: match[2].toLowerCase() };
  }
  const cantripMatch = content.match(/\*(\w+) cantrip\*/i);
  if (cantripMatch) {
    return { level: "cantrip", levelNum: 0, school: cantripMatch[1].toLowerCase() };
  }
  return { level: "?", levelNum: -1, school: "unknown" };
}

function levelShortLabel(levelNum: number): string {
  if (levelNum === 0) return "cnt";
  const suffixes = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
  return suffixes[levelNum] || `${levelNum}th`;
}

function parseSpellLists(content: string): Map<string, Map<number, string[]>> {
  const result = new Map<string, Map<number, string[]>>();
  let currentClass = "";
  let currentLevel = -1;

  for (const line of content.split("\n")) {
    const classMatch = line.match(/^## (\w[\w\s]*?) Spells/);
    if (classMatch) {
      currentClass = classMatch[1].trim();
      result.set(currentClass, new Map());
      currentLevel = -1;
      continue;
    }
    const levelMatch = line.match(/^#### Cantrips/);
    if (levelMatch) {
      currentLevel = 0;
      if (currentClass && result.has(currentClass)) {
        result.get(currentClass)!.set(0, []);
      }
      continue;
    }
    const numLevelMatch = line.match(/^#### (\d+)\w+ Level/);
    if (numLevelMatch) {
      currentLevel = parseInt(numLevelMatch[1], 10);
      if (currentClass && result.has(currentClass)) {
        result.get(currentClass)!.set(currentLevel, []);
      }
      continue;
    }
    const spellMatch = line.match(/^- (.+)/);
    if (spellMatch && currentClass && currentLevel >= 0) {
      const classMap = result.get(currentClass);
      if (classMap && classMap.has(currentLevel)) {
        classMap.get(currentLevel)!.push(spellMatch[1].trim());
      }
    }
  }
  return result;
}

export function SpellBrowser({ gameDir, height, contentWidth, initialSpell, onClose }: Props) {
  const [tabMode, setTabMode] = useState<TabMode>("alpha");
  const [cursor, setCursor] = useState(0);
  const [listScroll, setListScroll] = useState(0);
  const [detailScroll, setDetailScroll] = useState(0);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Load all spells
  const spells = useMemo<SpellEntry[]>(() => {
    const dir = join(gameDir, "Rules", "Spells");
    try {
      const files = readdirSync(dir)
        .filter((f) => f.endsWith(".md") && !f.startsWith("#"))
        .sort();
      return files.map((f) => {
        const content = readFileSync(join(dir, f), "utf-8");
        const name = basename(f, ".md");
        const { level, levelNum, school } = parseLevelFromItalic(content);
        return { name, filename: f, level, levelNum, school, content };
      });
    } catch {
      return [];
    }
  }, [gameDir]);

  // Load spell lists for "By Class" tab
  const classSpellLists = useMemo(() => {
    try {
      const content = readFileSync(join(gameDir, "Rules", "Spells", "## Spell Lists.md"), "utf-8");
      return parseSpellLists(content);
    } catch {
      return new Map<string, Map<number, string[]>>();
    }
  }, [gameDir]);

  // Spell name -> index lookup
  const spellIndex = useMemo(() => {
    const map = new Map<string, number>();
    spells.forEach((s, i) => map.set(s.name.toLowerCase(), i));
    return map;
  }, [spells]);

  // Build list items based on tab mode and search
  const listItems = useMemo<ListItem[]>(() => {
    const filtered = searchTerm
      ? spells.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : spells;

    if (searchTerm) {
      // Flat list when searching
      return filtered.map((s) => ({
        type: "spell" as const,
        label: s.name,
        spellIndex: spells.indexOf(s),
        levelLabel: levelShortLabel(s.levelNum),
      }));
    }

    if (tabMode === "alpha") {
      return filtered.map((s) => ({
        type: "spell" as const,
        label: s.name,
        spellIndex: spells.indexOf(s),
        levelLabel: levelShortLabel(s.levelNum),
      }));
    }

    if (tabMode === "level") {
      const items: ListItem[] = [];
      const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const levelNames = ["Cantrips", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level", "6th Level", "7th Level", "8th Level", "9th Level"];
      for (const lvl of levels) {
        const group = filtered.filter((s) => s.levelNum === lvl);
        if (group.length === 0) continue;
        items.push({ type: "header", label: levelNames[lvl] });
        for (const s of group) {
          items.push({
            type: "spell",
            label: s.name,
            spellIndex: spells.indexOf(s),
            levelLabel: levelShortLabel(s.levelNum),
          });
        }
      }
      return items;
    }

    // By Class
    const items: ListItem[] = [];
    for (const [className, levels] of classSpellLists) {
      items.push({ type: "header", label: `── ${className} ──` });
      const sortedLevels = [...levels.keys()].sort((a, b) => a - b);
      const levelNames = ["Cantrips", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level", "6th Level", "7th Level", "8th Level", "9th Level"];
      for (const lvl of sortedLevels) {
        const spellNames = levels.get(lvl) || [];
        if (spellNames.length === 0) continue;
        items.push({ type: "header", label: `  ${levelNames[lvl]}` });
        for (const name of spellNames) {
          const idx = spellIndex.get(name.toLowerCase());
          if (idx !== undefined) {
            items.push({
              type: "spell",
              label: name,
              spellIndex: idx,
              levelLabel: levelShortLabel(lvl),
            });
          }
        }
      }
    }
    return items;
  }, [spells, tabMode, searchTerm, classSpellLists, spellIndex]);

  // Get selectable indices (spell items only, not headers)
  const selectableIndices = useMemo(
    () => listItems.map((item, i) => (item.type === "spell" ? i : -1)).filter((i) => i >= 0),
    [listItems]
  );

  // Current selectable position
  const [selectPos, setSelectPos] = useState(0);

  // Initialize to initialSpell if provided
  useEffect(() => {
    if (initialSpell && spells.length > 0) {
      const targetIdx = spellIndex.get(initialSpell.toLowerCase());
      if (targetIdx !== undefined) {
        // Find this spell in the list items
        const listIdx = listItems.findIndex(
          (item) => item.type === "spell" && item.spellIndex === targetIdx
        );
        if (listIdx >= 0) {
          const selIdx = selectableIndices.indexOf(listIdx);
          if (selIdx >= 0) {
            setSelectPos(selIdx);
          }
        }
      }
    }
  }, [initialSpell, spells, spellIndex, listItems, selectableIndices]);

  // Clamp selectPos when list changes
  useEffect(() => {
    if (selectableIndices.length > 0 && selectPos >= selectableIndices.length) {
      setSelectPos(Math.max(0, selectableIndices.length - 1));
    }
  }, [selectableIndices, selectPos]);

  const currentListIndex = selectableIndices[selectPos] ?? 0;
  const currentItem = listItems[currentListIndex];
  const selectedSpell = currentItem?.type === "spell" && currentItem.spellIndex !== undefined
    ? spells[currentItem.spellIndex]
    : null;

  // Reset detail scroll when spell changes
  useEffect(() => {
    setDetailScroll(0);
  }, [selectedSpell?.name]);

  // Layout
  const footerHeight = 1;
  const tabBarHeight = 1;
  const searchBarHeight = 1;
  const separatorHeight = 1;
  const bodyHeight = Math.max(1, height - tabBarHeight - separatorHeight - searchBarHeight - footerHeight);
  const detailWidth = contentWidth - LIST_WIDTH - 1; // 1 for separator

  // Format detail content
  const detailLines = useMemo<FormattedLine[]>(() => {
    if (!selectedSpell) return [{ type: "text", text: "No spell selected." }];
    return formatMarkdown(selectedSpell.content, detailWidth);
  }, [selectedSpell, detailWidth]);

  const maxDetailScroll = Math.max(0, detailLines.length - bodyHeight);

  // Keep list scroll in view of cursor
  useEffect(() => {
    if (currentListIndex < listScroll) {
      setListScroll(currentListIndex);
    } else if (currentListIndex >= listScroll + bodyHeight) {
      setListScroll(currentListIndex - bodyHeight + 1);
    }
  }, [currentListIndex, listScroll, bodyHeight]);

  const scrollDetailUp = useCallback(
    (n: number) => setDetailScroll((prev) => Math.max(0, prev - n)),
    []
  );
  const scrollDetailDown = useCallback(
    (n: number) => setDetailScroll((prev) => Math.min(maxDetailScroll, prev + n)),
    [maxDetailScroll]
  );

  useInput((input, key) => {
    // Search mode input handling
    if (searching) {
      if (key.escape) {
        setSearching(false);
        return;
      }
      if (key.return) {
        setSearching(false);
        return;
      }
      if (key.backspace || key.delete) {
        setSearchTerm((prev) => prev.slice(0, -1));
        setSelectPos(0);
        return;
      }
      // Arrow keys still navigate in search mode
      if (key.upArrow) {
        setSelectPos((p) => Math.max(0, p - 1));
        return;
      }
      if (key.downArrow) {
        setSelectPos((p) => Math.min(selectableIndices.length - 1, p + 1));
        return;
      }
      if (!key.ctrl && !key.meta && input && !key.tab) {
        setSearchTerm((prev) => prev + input);
        setSelectPos(0);
        return;
      }
      return;
    }

    // Normal mode
    if (key.escape) {
      onClose();
      return;
    }
    if (input === "q") {
      onClose();
      return;
    }
    if (input === "/") {
      setSearching(true);
      return;
    }

    // Tab cycling
    if (key.tab || key.leftArrow || key.rightArrow) {
      const dir = key.leftArrow ? -1 : 1;
      setTabMode((prev) => {
        const idx = TAB_LABELS.findIndex((t) => t.mode === prev);
        const next = (idx + dir + TAB_LABELS.length) % TAB_LABELS.length;
        return TAB_LABELS[next].mode;
      });
      setSelectPos(0);
      setListScroll(0);
      setSearchTerm("");
      return;
    }

    // List navigation
    if (key.upArrow) {
      setSelectPos((p) => Math.max(0, p - 1));
      return;
    }
    if (key.downArrow) {
      setSelectPos((p) => Math.min(selectableIndices.length - 1, p + 1));
      return;
    }

    // Detail scrolling
    if (input === " " && key.shift) {
      scrollDetailUp(bodyHeight);
      return;
    }
    if (input === " ") {
      scrollDetailDown(bodyHeight);
      return;
    }
    if (key.pageUp) {
      scrollDetailUp(bodyHeight);
      return;
    }
    if (key.pageDown) {
      scrollDetailDown(bodyHeight);
      return;
    }
  });

  // Mouse scroll for detail panel
  useEffect(() => {
    const handleScroll = (direction: "up" | "down") => {
      if (direction === "up") scrollDetailUp(SCROLL_LINES);
      else scrollDetailDown(SCROLL_LINES);
    };
    mouseEvents.on("scroll", handleScroll);
    return () => { mouseEvents.off("scroll", handleScroll); };
  }, [scrollDetailUp, scrollDetailDown]);

  // Visible list items
  const visibleListItems = listItems.slice(listScroll, listScroll + bodyHeight);
  const listPadCount = Math.max(0, bodyHeight - visibleListItems.length);

  // Visible detail lines
  const visibleDetail = detailLines.slice(detailScroll, detailScroll + bodyHeight);
  const detailPadCount = Math.max(0, bodyHeight - visibleDetail.length);

  if (spells.length === 0) {
    return (
      <Box flexDirection="column" height={height} width={contentWidth}>
        <Box justifyContent="center" width={contentWidth}>
          <Text color="#B8860B" bold>{"=== Spell Browser ==="}</Text>
        </Box>
        <Text color={TAB_INACTIVE}>{"─".repeat(contentWidth)}</Text>
        <Box flexDirection="column" flexGrow={1} justifyContent="center" alignItems="center">
          <Text color={CONTENT_COLOR}>No spells found in Rules/Spells/</Text>
        </Box>
        <Box justifyContent="center" width={contentWidth}>
          <Text color={TAB_INACTIVE} dimColor>{"(Esc: close)"}</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" height={height} width={contentWidth}>
      {/* Tab bar */}
      <Box>
        {TAB_LABELS.map((tab, i) => (
          <Text key={tab.mode}>
            <Text
              color={tab.mode === tabMode && !searchTerm ? TAB_COLOR : TAB_INACTIVE}
              bold={tab.mode === tabMode && !searchTerm}
            >
              {` ${tab.label} `}
            </Text>
            {i < TAB_LABELS.length - 1 && <Text color={TAB_INACTIVE}>|</Text>}
          </Text>
        ))}
      </Box>
      {/* Separator */}
      <Text color={TAB_INACTIVE}>{"─".repeat(contentWidth)}</Text>
      {/* Search bar */}
      <Box>
        <Text color={searching ? TAB_COLOR : TAB_INACTIVE}>
          {" [/] Search: "}
        </Text>
        <Text color={TAB_COLOR}>
          {searchTerm || (searching ? "▌" : "")}
          {searching && searchTerm ? "▌" : ""}
        </Text>
      </Box>
      {/* Main body: list + separator + detail */}
      <Box flexDirection="row" height={bodyHeight}>
        {/* Left panel: spell list */}
        <Box flexDirection="column" width={LIST_WIDTH}>
          {visibleListItems.map((item, i) => {
            const actualIdx = listScroll + i;
            if (item.type === "header") {
              return (
                <Text key={`h-${actualIdx}`} wrap="truncate">
                  <Text color="#B8860B" bold>{` ${item.label}`}</Text>
                </Text>
              );
            }
            const isSelected = actualIdx === currentListIndex;
            const nameWidth = LIST_WIDTH - 6; // space for cursor + level label
            const truncName = item.label.length > nameWidth
              ? item.label.slice(0, nameWidth - 1) + "…"
              : item.label;
            const pad = Math.max(0, nameWidth - truncName.length);
            return (
              <Text key={`s-${actualIdx}`} wrap="truncate">
                <Text color={isSelected ? CURSOR_COLOR : TAB_INACTIVE}>
                  {isSelected ? " > " : "   "}
                </Text>
                <Text color={isSelected ? CURSOR_COLOR : CONTENT_COLOR}>
                  {truncName}
                </Text>
                <Text color={TAB_INACTIVE}>
                  {" ".repeat(pad)} {item.levelLabel || ""}
                </Text>
              </Text>
            );
          })}
          {Array.from({ length: listPadCount }).map((_, i) => (
            <Text key={`lpad-${i}`}> </Text>
          ))}
        </Box>
        {/* Vertical separator */}
        <Box flexDirection="column" width={1}>
          {Array.from({ length: bodyHeight }).map((_, i) => (
            <Text key={`sep-${i}`} color={TAB_INACTIVE}>│</Text>
          ))}
        </Box>
        {/* Right panel: spell detail */}
        <Box flexDirection="column" width={detailWidth}>
          {visibleDetail.map((line, i) => (
            <Box key={`${detailScroll}-${i}`} width={detailWidth}>
              {renderFormattedLine(line)}
            </Box>
          ))}
          {Array.from({ length: detailPadCount }).map((_, i) => (
            <Box key={`dpad-${i}`} width={detailWidth}>
              <Text> </Text>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Footer */}
      <Box justifyContent="center" width={contentWidth}>
        <Text color={TAB_INACTIVE} dimColor>
          {searching
            ? "(Type to search, ↑↓: navigate, Esc: exit search)"
            : "(Tab/←→: view, /: search, ↑↓: nav, Space: scroll detail, Esc: close)"}
        </Text>
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
