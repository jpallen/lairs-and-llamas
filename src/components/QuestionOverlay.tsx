import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import type { PendingQuestion } from "../hooks/useClaudeSession.js";

interface QuestionInputProps {
  pendingQuestion: PendingQuestion;
  onAnswer: (answers: Record<string, string>) => void;
  width: number;
}

const PROMPT_COLOR = "#B8860B";
const LABEL_COLOR = "#CD853F";
const DESC_COLOR = "#8B4513";
const QUESTION_COLOR = "#D2691E";

export function QuestionInput({ pendingQuestion, onAnswer, width }: QuestionInputProps) {
  const { questions } = pendingQuestion;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = questions[questionIndex];
  const options = current.options;

  useInput((_input, key) => {
    if (key.upArrow) {
      setCursor((c) => (c <= 0 ? options.length - 1 : c - 1));
    }
    if (key.downArrow) {
      setCursor((c) => (c >= options.length - 1 ? 0 : c + 1));
    }

    if (_input === " " && current.multiSelect) {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(cursor)) {
          next.delete(cursor);
        } else {
          next.add(cursor);
        }
        return next;
      });
      return;
    }

    if (key.return) {
      let answer: string;
      if (current.multiSelect) {
        const indices = selected.size > 0 ? Array.from(selected) : [cursor];
        answer = indices.map((i) => options[i].label).join(", ");
      } else {
        answer = options[cursor].label;
      }

      const newAnswers = { ...answers, [current.question]: answer };

      if (questionIndex < questions.length - 1) {
        setAnswers(newAnswers);
        setQuestionIndex(questionIndex + 1);
        setCursor(0);
        setSelected(new Set());
      } else {
        onAnswer(newAnswers);
      }
    }
  });

  const stepLabel = questions.length > 1
    ? ` (${questionIndex + 1}/${questions.length})`
    : "";

  return (
    <Box flexDirection="column" flexShrink={0} width={width}>
      <Text color={QUESTION_COLOR} wrap="wrap">
        <Text color={PROMPT_COLOR} bold>{"? "}</Text>
        {current.question}
        <Text dimColor>{stepLabel}</Text>
      </Text>
      {options.map((opt, i) => {
        const isCursor = i === cursor;
        const isSelected = selected.has(i);
        const prefix = current.multiSelect
          ? (isSelected ? "[x] " : "[ ] ")
          : (isCursor ? "> " : "  ");
        return (
          <Text key={i} wrap="wrap">
            <Text color={isCursor ? LABEL_COLOR : DESC_COLOR}>
              {prefix}{opt.label}
            </Text>
            {opt.description ? (
              <Text color={DESC_COLOR} dimColor> — {opt.description}</Text>
            ) : null}
          </Text>
        );
      })}
    </Box>
  );
}
