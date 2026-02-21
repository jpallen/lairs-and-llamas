import React, { useState } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import { MessageHistory } from "./components/MessageHistory.js";
import { ToolCallBar } from "./components/ToolCallBar.js";
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
  initialSessionId: string | null;
  initialMessages: ChatMessage[];
  initialPrompt?: string;
  onSessionInit: (sessionId: string) => void;
  onToggleDebug: () => void;
  onBack: () => void;
  onQuit: () => void;
}

type OverlayMode = "none" | "menu" | "character-sheet";

const BORDER = "#8B4513";

export function App({ systemPrompt, cwd, gameDir, debugMode, initialSessionId, initialMessages, initialPrompt, onSessionInit, onToggleDebug, onBack, onQuit }: AppProps) {
  const { messages, currentToolCall, isProcessing, sendMessage } =
    useClaudeSession({ systemPrompt, cwd, debugMode, initialSessionId, initialMessages, initialPrompt, onSessionInit });

  const [overlayMode, setOverlayMode] = useState<OverlayMode>("none");
  const [showHelp, setShowHelp] = useState(false);

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;

  const HELP_PANEL_WIDTH = 26;
  const helpVisible = showHelp && overlayMode === "none";
  const isCharSheet = overlayMode === "character-sheet";
  const baseFrameWidth = isCharSheet ? 120 : 80;
  const frameWidth = Math.min(
    helpVisible ? baseFrameWidth + HELP_PANEL_WIDTH : baseFrameWidth,
    terminalWidth
  );
  // Box with borderStyle="round" uses 2 chars for borders + 2 for padding
  const contentWidth = frameWidth - 4;
  const chatWidth = helpVisible ? contentWidth - HELP_PANEL_WIDTH : contentWidth;

  const toolBarHeight = currentToolCall ? 1 : 0;
  const inputHeight = 1;
  // border top/bottom = 2, tool bar, input bar
  const chromeHeight = 2 + toolBarHeight + inputHeight;
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
    // Ctrl+H toggles help panel
    if (input === "h" && key.ctrl) {
      setShowHelp((h) => !h);
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
          <Box flexDirection="row">
            <Box flexDirection="column" width={chatWidth}>
              <MessageHistory
                messages={messages}
                height={historyHeight}
                contentWidth={chatWidth}
                isProcessing={isProcessing}
                debugMode={debugMode}
                isActive={overlayMode === "none"}
              />
              {currentToolCall && (
                <ToolCallBar toolCall={currentToolCall} width={chatWidth} />
              )}
              <InputBar onSubmit={sendMessage} isProcessing={isProcessing} disabled={overlayMode !== "none"} />
            </Box>
            {helpVisible && <HelpPanel height={innerHeight} />}
          </Box>
        )}
      </Box>
    </Box>
  );
}
