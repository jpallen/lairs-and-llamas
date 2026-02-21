import React, { useState } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import { MessageHistory } from "./components/MessageHistory.js";

import { InputBar } from "./components/InputBar.js";
import { MenuOverlay } from "./components/MenuOverlay.js";
import { CharacterSheetViewer } from "./components/CharacterSheetViewer.js";
import { HelpPanel } from "./components/HelpPanel.js";
import { useClaudeSession } from "./hooks/useClaudeSession.js";
import { cleanup } from "./mouseFilter.js";
import type { ChatMessage } from "./types.js";

interface AppProps {
  systemPrompt: string;
  cwd: string;
  gameDir: string;
  debugMode: boolean;
  showHelp: boolean;
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
  onToggleHelp: () => void;
  onToggleDebug: () => void;
  onBack: () => void;
  onQuit: () => void;
}

type OverlayMode = "none" | "menu" | "character-sheet";

const BORDER = "#8B4513";

export function App({ systemPrompt, cwd, gameDir, debugMode, showHelp, initialSessionId, initialMessages, initialPrompt, onSessionInit, onToggleHelp, onToggleDebug, onBack, onQuit }: AppProps) {
  const { messages, currentToolCall, isProcessing, statusMessage, sendMessage } =
    useClaudeSession({ systemPrompt, cwd, initialSessionId, initialMessages, initialPrompt, onSessionInit });

  const [overlayMode, setOverlayMode] = useState<OverlayMode>("none");

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;

  const helpVisible = showHelp && overlayMode === "none";
  const isCharSheet = overlayMode === "character-sheet";
  const frameWidth = Math.min(isCharSheet ? 120 : 80, terminalWidth);
  // Box with borderStyle="round" uses 2 chars for borders + 2 for padding
  const contentWidth = frameWidth - 4;

  const inputHeight = 1;
  // border top/bottom = 2, input bar
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
    // Ctrl+G toggles help panel
    if (input === "g" && key.ctrl) {
      onToggleHelp();
      return;
    }
  }, { isActive: overlayMode !== "menu" });

  const handleMenuSelect = (action: string) => {
    switch (action) {
      case "resume":
        setOverlayMode("none");
        break;
      case "character-sheets":
        setOverlayMode("character-sheet");
        break;
      case "toggle-help":
        onToggleHelp();
        setOverlayMode("none");
        break;
      case "toggle-debug":
        onToggleDebug();
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

  const renderOverlay = () => {
    if (overlayMode === "menu") {
      return (
        <MenuOverlay
          title="=== Menu ==="
          items={[
            { label: "Resume", action: "resume" },
            { label: "Character Sheets", action: "character-sheets" },
            { label: `Toggle Help ${showHelp ? "(on)" : "(off)"}`, action: "toggle-help" },
            { label: `Toggle Debug Mode ${debugMode ? "(on)" : "(off)"}`, action: "toggle-debug" },
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
              isActive={overlayMode === "none"}
            />
            <InputBar onSubmit={sendMessage} isProcessing={isProcessing} disabled={overlayMode !== "none"} />
          </>
        )}
      </Box>
      {helpVisible && <HelpPanel />}
    </Box>
  );
}
