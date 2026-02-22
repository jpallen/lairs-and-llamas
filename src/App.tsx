import React, { useState } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import { MessageHistory } from "./components/MessageHistory.js";

import { InputBar } from "./components/InputBar.js";
import { MenuOverlay } from "./components/MenuOverlay.js";
import { CharacterSheetViewer } from "./components/CharacterSheetViewer.js";
import { QuestionInput } from "./components/QuestionOverlay.js";
import { FileViewer } from "./components/FileViewer.js";
import { HelpPanel } from "./components/HelpPanel.js";
import { useClaudeSession } from "./hooks/useClaudeSession.js";
import { cleanup } from "./mouseFilter.js";
import { join } from "path";
import type { ChatMessage } from "./types.js";
import type { EffortLevel } from "./gameManager.js";

interface AppProps {
  systemPrompt: string;
  cwd: string;
  gameDir: string;
  model: string;
  effort: EffortLevel;
  debugMode: boolean;
  showHelp: boolean;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
  onClearSession: () => void;
  onSwitchModel: () => void;
  onSwitchEffort: () => void;
  onToggleHelp: () => void;
  onToggleDebug: () => void;
  onBack: () => void;
  onQuit: () => void;
}

type OverlayMode = "none" | "menu" | "settings" | "character-sheet" | "journal";

const BORDER = "#8B4513";

export function App({ systemPrompt, cwd, gameDir, model, effort, debugMode, showHelp, initialSessionId, initialMessages, initialPrompt, onSessionInit, onClearSession, onSwitchModel, onSwitchEffort, onToggleHelp, onToggleDebug, onBack, onQuit }: AppProps) {
  const { messages, currentToolCall, isProcessing, statusMessage, pendingQuestion, sendMessage, answerQuestion, interrupt, clearSession } =
    useClaudeSession({ systemPrompt, cwd, model, effort, initialSessionId, initialMessages, initialPrompt, onSessionInit });

  const [overlayMode, setOverlayMode] = useState<OverlayMode>("none");
  const [scrollRevision, setScrollRevision] = useState(0);

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;

  const helpVisible = showHelp && overlayMode === "none";
  const isCharSheet = overlayMode === "character-sheet";
  const frameWidth = Math.min(isCharSheet ? 120 : 80, terminalWidth);
  // Box with borderStyle="round" uses 2 chars for borders + 2 for padding
  const contentWidth = frameWidth - 4;

  // Estimate question input height: question text + options with descriptions
  const inputHeight = pendingQuestion
    ? (() => {
        const q = pendingQuestion.questions[0];
        const questionLines = Math.ceil((q.question.length + 2) / (contentWidth || 1)) || 1;
        const optionLines = q.options.reduce((sum, opt) => {
          const text = `  ${opt.label}${opt.description ? ` — ${opt.description}` : ""}`;
          return sum + (Math.ceil(text.length / (contentWidth || 1)) || 1);
        }, 0);
        return questionLines + optionLines;
      })()
    : 1;
  // border top/bottom = 2, input area
  const chromeHeight = 2 + inputHeight;
  const historyHeight = Math.max(1, terminalHeight - chromeHeight);
  // Full inner height (border top/bottom = 2)
  const innerHeight = terminalHeight - 2;

  useInput((input, key) => {
    if (key.escape && overlayMode === "none") {
      setOverlayMode("menu");
      return;
    }
    // Ctrl+P toggles character sheet
    if (input === "p" && key.ctrl) {
      setOverlayMode((m) => m === "character-sheet" ? "none" : "character-sheet");
      return;
    }
    // Ctrl+O toggles journal
    if (input === "o" && key.ctrl) {
      setOverlayMode((m) => m === "journal" ? "none" : "journal");
      return;
    }
    // Ctrl+B toggles verbose mode
    if (input === "b" && key.ctrl) {
      onToggleDebug();
      setScrollRevision((r) => r + 1);
      return;
    }
    // Ctrl+G toggles help panel
    if (input === "g" && key.ctrl) {
      onToggleHelp();
      return;
    }
  }, { isActive: overlayMode === "none" && !pendingQuestion });

  const modelLabel = model === "claude-opus-4-6" ? "Opus" : "Sonnet";

  const effortLabel = effort[0].toUpperCase() + effort.slice(1);

  const handleMenuSelect = (action: string) => {
    switch (action) {
      case "resume":
        setOverlayMode("none");
        break;
      case "interrupt":
        interrupt();
        setOverlayMode("none");
        break;
      case "clear-session":
        clearSession();
        onClearSession();
        setOverlayMode("none");
        break;
      case "settings":
        setOverlayMode("settings");
        break;
      case "character-sheets":
        setOverlayMode("character-sheet");
        break;
      case "journal":
        setOverlayMode("journal");
        break;
      case "toggle-help":
        onToggleHelp();
        setOverlayMode("none");
        break;
      case "toggle-debug":
        onToggleDebug();
        setScrollRevision((r) => r + 1);
        setOverlayMode("none");
        break;
      case "back":
        onBack();
        break;
      case "quit":
        onQuit();
        break;
    }
  };

  const handleSettingsSelect = (action: string) => {
    switch (action) {
      case "switch-model":
        onSwitchModel();
        break;
      case "switch-effort":
        onSwitchEffort();
        break;
    }
  };

  const renderOverlay = () => {
    if (overlayMode === "menu") {
      return (
        <MenuOverlay
          title="=== Menu ==="
          items={[
            { label: "Resume", action: "resume" },
            ...(isProcessing ? [{ label: "Interrupt", action: "interrupt" }] : []),
            { label: "Clear Session", action: "clear-session" },
            { label: "Settings", action: "settings" },
            { label: "Character Sheets", action: "character-sheets" },
            { label: "Journal", action: "journal" },
            { label: `Toggle Help ${showHelp ? "(on)" : "(off)"}`, action: "toggle-help" },
            { label: `Toggle Verbose Mode ${debugMode ? "(on)" : "(off)"}`, action: "toggle-debug" },
            { label: "Back to Menu", action: "back" },
            { label: "Quit", action: "quit" },
          ]}
          onSelect={handleMenuSelect}
          onClose={() => setOverlayMode("none")}
          height={innerHeight}
          width={contentWidth}
        />
      );
    }
    if (overlayMode === "settings") {
      return (
        <MenuOverlay
          title="=== Settings ==="
          items={[
            { label: `Model (${modelLabel})`, action: "switch-model" },
            { label: `Reasoning Effort (${effortLabel})`, action: "switch-effort" },
          ]}
          onSelect={handleSettingsSelect}
          onClose={() => setOverlayMode("menu")}
          height={innerHeight}
          width={contentWidth}
        />
      );
    }
    if (overlayMode === "character-sheet") {
      return (
        <CharacterSheetViewer
          gameDir={gameDir}
          height={innerHeight}
          contentWidth={contentWidth}
          onClose={() => setOverlayMode("none")}
        />
      );
    }
    if (overlayMode === "journal") {
      return (
        <FileViewer
          filePath={join(gameDir, "JOURNAL.md")}
          title="=== Journal ==="
          height={innerHeight}
          contentWidth={contentWidth}
          scrollToEnd
          onClose={() => setOverlayMode("none")}
        />
      );
    }
    return null;
  };

  return (
    <Box
      width={terminalWidth}
      height={terminalHeight}
      justifyContent="center"
    >
      <Box
        flexDirection="column"
        width={frameWidth}
        height={terminalHeight}
        borderStyle="round"
        borderColor={BORDER}
        paddingLeft={1}
        paddingRight={1}
      >
        {overlayMode !== "none" ? renderOverlay() : (
          <>
            <MessageHistory
              messages={messages}
              height={historyHeight}
              contentWidth={contentWidth}
              isProcessing={isProcessing}
              debugMode={debugMode}
              currentToolCall={currentToolCall}
              statusMessage={statusMessage}
              scrollRevision={scrollRevision}
              isActive={overlayMode === "none" && !pendingQuestion}
            />
            {pendingQuestion ? (
              <QuestionInput
                pendingQuestion={pendingQuestion}
                onAnswer={answerQuestion}
                width={contentWidth}
              />
            ) : (
              <InputBar onSubmit={sendMessage} isProcessing={isProcessing} disabled={overlayMode !== "none"} />
            )}
          </>
        )}
      </Box>
      {helpVisible && <HelpPanel />}
    </Box>
  );
}
