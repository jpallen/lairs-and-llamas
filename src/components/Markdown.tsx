import React from "react";
import { Text } from "ink";

interface Props {
  children: string;
  baseColor: string;
}

// Style types for inline spans
interface Span {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  dimColor?: boolean;
}

// Line-level metadata
interface ParsedLine {
  spans: Span[];
  isHeading?: boolean;
  headingLevel?: number;
  isBullet?: boolean;
  bulletIndent?: number;
  isCodeBlock?: boolean;
  isHorizontalRule?: boolean;
}

const CODE_COLOR = "#B8860B"; // dark goldenrod
const HEADING_COLOR = "#CD853F"; // peru
const HR_COLOR = "#8B4513"; // saddle brown

/**
 * Renders a single line of markdown-formatted text with Ink <Text> components.
 * Supports: **bold**, *italic*, `code`, # headings, - bullet lists, code blocks, ---
 */
export function MarkdownLine({ children: text, baseColor }: Props) {
  const parsed = parseLine(text);

  if (parsed.isHorizontalRule) {
    return <Text color={HR_COLOR} dimColor>{"─".repeat(40)}</Text>;
  }

  const spans = parsed.spans;

  return (
    <Text>
      {spans.map((span, i) => {
        if (span.code) {
          return (
            <Text key={i} color={CODE_COLOR}>
              {span.text}
            </Text>
          );
        }
        if (parsed.isHeading) {
          return (
            <Text key={i} color={HEADING_COLOR} bold>
              {span.text}
            </Text>
          );
        }
        return (
          <Text
            key={i}
            color={baseColor}
            bold={span.bold}
            italic={span.italic}
            dimColor={span.dimColor}
          >
            {span.text}
          </Text>
        );
      })}
    </Text>
  );
}

function parseLine(raw: string): ParsedLine {
  // Horizontal rule: ---, ***, ___
  if (/^(\s*[-*_]\s*){3,}$/.test(raw)) {
    return { spans: [], isHorizontalRule: true };
  }

  // Code block fence
  if (/^```/.test(raw)) {
    return { spans: [{ text: raw, code: true }], isCodeBlock: true };
  }

  // Heading: # text
  const headingMatch = raw.match(/^(#{1,3})\s+(.*)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const content = headingMatch[2];
    return {
      spans: parseInline(content),
      isHeading: true,
      headingLevel: level,
    };
  }

  // Bullet list: - text, * text, or numbered 1. text
  const bulletMatch = raw.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
  if (bulletMatch) {
    const indent = bulletMatch[1].length;
    const marker = bulletMatch[2].startsWith("-") || bulletMatch[2].startsWith("*") ? "•" : bulletMatch[2];
    const content = bulletMatch[3];
    return {
      spans: [
        { text: " ".repeat(indent) + marker + " " },
        ...parseInline(content),
      ],
      isBullet: true,
      bulletIndent: indent,
    };
  }

  return { spans: parseInline(raw) };
}

/**
 * Parse inline markdown: **bold**, *italic*, ***bold italic***, `code`
 */
function parseInline(text: string): Span[] {
  const spans: Span[] = [];
  // Regex matches: `code`, ***bold italic***, **bold**, *italic*
  const pattern = /(`[^`]+`|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    // Text before this match
    if (match.index > lastIndex) {
      spans.push({ text: text.slice(lastIndex, match.index) });
    }

    const token = match[0];
    if (token.startsWith("`")) {
      // Inline code — strip backticks
      spans.push({ text: token.slice(1, -1), code: true });
    } else if (token.startsWith("***")) {
      // Bold italic — strip ***
      spans.push({ text: token.slice(3, -3), bold: true, italic: true });
    } else if (token.startsWith("**")) {
      // Bold — strip **
      spans.push({ text: token.slice(2, -2), bold: true });
    } else if (token.startsWith("*")) {
      // Italic — strip *
      spans.push({ text: token.slice(1, -1), italic: true });
    }

    lastIndex = match.index + token.length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    spans.push({ text: text.slice(lastIndex) });
  }

  if (spans.length === 0) {
    spans.push({ text: "" });
  }

  return spans;
}
