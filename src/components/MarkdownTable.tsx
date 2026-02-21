import React from "react";
import { Box, Text } from "ink";
import { wordWrap } from "./MessageHistory.js";

const BORDER_COLOR = "#8B4513";
const HEADER_COLOR = "#CD853F";
const CELL_COLOR = "#D2691E";
const BOLD_COLOR = "#B8860B";

interface TableProps {
  /** Pre-parsed table: array of rows, each row is array of cell strings */
  rows: string[][];
  /** Column widths (already computed) */
  colWidths: number[];
  /** Whether the first row is a header (separator row was detected) */
  hasHeader: boolean;
  baseColor?: string;
}

/**
 * Renders a single row of a markdown table as a formatted Text line.
 * Called once per visible row by the parent viewport.
 */
export function MarkdownTableRow({ cells, colWidths, isHeader, baseColor }: {
  cells: string[];
  colWidths: number[];
  isHeader: boolean;
  baseColor?: string;
}) {
  const cellColor = baseColor ?? CELL_COLOR;
  return (
    <Text>
      <Text color={BORDER_COLOR}>{"│"}</Text>
      {colWidths.map((w, i) => {
        const raw = (cells[i] ?? "").trim();
        const padded = padCell(raw, w);
        return (
          <React.Fragment key={i}>
            {renderCell(padded, isHeader, cellColor)}
            <Text color={BORDER_COLOR}>{"│"}</Text>
          </React.Fragment>
        );
      })}
    </Text>
  );
}

export function MarkdownTableBorder({ colWidths, position }: {
  colWidths: number[];
  position: "top" | "middle" | "bottom";
}) {
  const [left, cross, right, line] = {
    top:    ["┌", "┬", "┐", "─"],
    middle: ["├", "┼", "┤", "─"],
    bottom: ["└", "┴", "┘", "─"],
  }[position];

  const inner = colWidths.map((w) => line.repeat(w + 2)).join(cross);
  return <Text color={BORDER_COLOR}>{left}{inner}{right}</Text>;
}

function padCell(text: string, width: number): string {
  // Strip markdown bold markers for length calculation
  const displayLen = text.replace(/\*\*/g, "").length;
  const padding = Math.max(0, width - displayLen);
  return text + " ".repeat(padding);
}

function renderCell(padded: string, isHeader: boolean, baseColor: string) {
  const color = isHeader ? HEADER_COLOR : baseColor;
  // Parse **bold** within cells
  const parts: React.ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = pattern.exec(padded)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Text key={idx++} color={color}>{padded.slice(lastIndex, match.index)}</Text>);
    }
    parts.push(<Text key={idx++} color={BOLD_COLOR} bold>{match[1]}</Text>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < padded.length) {
    parts.push(<Text key={idx++} color={color}>{padded.slice(lastIndex)}</Text>);
  }

  return <Text>{" "}{parts}{" "}</Text>;
}

/**
 * Parses markdown table lines into structured data.
 * Returns null if the lines don't form a valid table.
 */
export function parseMarkdownTable(lines: string[]): {
  rows: string[][];
  colWidths: number[];
  hasHeader: boolean;
} | null {
  if (lines.length < 2) return null;

  const parsed: string[][] = [];
  let hasHeader = false;
  let separatorIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith("|")) return null;

    // Check for separator row: |---|---|
    if (/^\|[\s:]*-+[\s:]*(\|[\s:]*-+[\s:]*)*\|?\s*$/.test(line)) {
      hasHeader = true;
      separatorIndex = i;
      continue;
    }

    const cells = line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    parsed.push(cells);
  }

  if (parsed.length === 0) return null;

  const numCols = Math.max(...parsed.map((r) => r.length));
  // Normalize all rows to same number of columns
  for (const row of parsed) {
    while (row.length < numCols) row.push("");
  }

  // Calculate column widths (using display length, stripping **)
  const colWidths = Array.from({ length: numCols }, (_, col) =>
    Math.max(...parsed.map((row) => (row[col] ?? "").replace(/\*\*/g, "").length))
  );

  return { rows: parsed, colWidths, hasHeader };
}

/**
 * Given raw markdown lines, detect table blocks and return an array of
 * render-ready line descriptors. Non-table lines pass through as-is.
 */
export interface TableLine {
  type: "table-border";
  colWidths: number[];
  position: "top" | "middle" | "bottom";
}

export interface TableRowLine {
  type: "table-row";
  cells: string[];
  colWidths: number[];
  isHeader: boolean;
}

export interface TextLine {
  type: "text";
  text: string;
}

export type FormattedLine = TableLine | TableRowLine | TextLine;

export function formatLinesWithTables(rawLines: string[]): FormattedLine[] {
  const result: FormattedLine[] = [];
  let i = 0;

  while (i < rawLines.length) {
    // Check if this starts a table block (line starts with |)
    if (rawLines[i].trim().startsWith("|")) {
      const tableStart = i;
      while (i < rawLines.length && rawLines[i].trim().startsWith("|")) {
        i++;
      }
      const tableLines = rawLines.slice(tableStart, i);
      const table = parseMarkdownTable(tableLines);
      if (table) {
        result.push({ type: "table-border", colWidths: table.colWidths, position: "top" });
        for (let r = 0; r < table.rows.length; r++) {
          const isHeader = table.hasHeader && r === 0;
          result.push({
            type: "table-row",
            cells: table.rows[r],
            colWidths: table.colWidths,
            isHeader,
          });
          if (isHeader) {
            result.push({ type: "table-border", colWidths: table.colWidths, position: "middle" });
          }
        }
        result.push({ type: "table-border", colWidths: table.colWidths, position: "bottom" });
      } else {
        // Fallback: treat as plain text
        for (const line of tableLines) {
          result.push({ type: "text", text: line });
        }
      }
    } else {
      result.push({ type: "text", text: rawLines[i] });
      i++;
    }
  }

  return result;
}

/**
 * Takes raw markdown text and a content width, word-wraps non-table lines,
 * then formats table blocks. Shared by MessageHistory and CharacterSheetViewer.
 */
export function formatMarkdown(text: string, contentWidth: number): FormattedLine[] {
  const rawLines: string[] = [];
  for (const rawLine of text.split("\n")) {
    if (rawLine.trim().startsWith("|")) {
      rawLines.push(rawLine);
    } else {
      for (const w of wordWrap(rawLine, contentWidth)) {
        rawLines.push(w);
      }
    }
  }
  return formatLinesWithTables(rawLines);
}
