import React, { useState, useCallback, useEffect, useRef } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import { execSync } from "child_process";
import { MessageHistory } from "./components/MessageHistory.js";

import { InputBar } from "./components/InputBar.js";
import { MenuOverlay } from "./components/MenuOverlay.js";
import { CharacterSheetViewer, type CharacterSheetState } from "./components/CharacterSheetViewer.js";
import { SpellBrowser } from "./components/SpellBrowser.js";
import { QuestionInput } from "./components/QuestionOverlay.js";
import { FileViewer } from "./components/FileViewer.js";
import { HelpPanel } from "./components/HelpPanel.js";
import { useClaudeSession } from "./hooks/useClaudeSession.js";
import { cleanup } from "./mouseFilter.js";
import { debug } from "./debug.js";
import { join } from "path";
import type { ChatMessage } from "./types.js";
import type { EffortLevel } from "./gameManager.js";

interface AppProps {
  serverUrl: string;
  password: string;
  gameDir: string | null;
  model: string;
  effort: EffortLevel;
  debugMode: boolean;
  showHelp: boolean;
  onSessionInit: (sessionId: string) => void;
  onClearSession: () => void;
  onModelChanged: (model: string) => void;
  onEffortChanged: (effort: EffortLevel) => void;
  onToggleHelp: () => void;
  onToggleDebug: () => void;
  onStartTunnel?: (onStatusChange: (status: { open: boolean; url?: string }) => void) => Promise<string>;
  onStopTunnel?: () => Promise<void>;
  isTunnelOpen?: () => boolean;
  onBack: () => void;
  onQuit: () => void;
}

type OverlayMode = "none" | "menu" | "settings" | "character-sheet" | "journal" | "share" | "spell-browser";

const BORDER = "#8B4513";

function ShareOverlay({ loading, shareUrl, clientCount, tunnelOpen, height, width, onClose }: { loading: boolean; shareUrl: string | null; clientCount: number; tunnelOpen: boolean; height: number; width: number; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [cursor, setCursor] = useState(0);

  useInput((_input, key) => {
    if (key.escape) {
      onClose();
      return;
    }
    if (shareUrl && key.return && cursor === 0) {
      try {
        execSync(`printf '%s' ${JSON.stringify(shareUrl)} | pbcopy`);
        setCopied(true);
      } catch {
        // pbcopy not available
      }
    }
    if (key.upArrow) setCursor(0);
    if (key.downArrow) setCursor(1);
  });

  const contentLines = loading ? 3 : shareUrl ? 11 : 3;
  const topPad = Math.max(0, Math.floor((height - contentLines) / 2));

  return (
    <Box flexDirection="column" height={height} width={width}>
      {Array.from({ length: topPad }).map((_, i) => (
        <Text key={`pad-${i}`}> </Text>
      ))}
      <Box justifyContent="center" width={width}>
        <Text color="#B8860B" bold>{"=== Share Game ==="}</Text>
      </Box>
      <Text> </Text>
      {loading ? (
        <Box justifyContent="center" width={width}>
          <Text color="#D2691E">Starting tunnel...</Text>
        </Box>
      ) : shareUrl ? (
        <>
          <Box justifyContent="center" width={width}>
            <Text color="#D2691E">Share this URL with players:</Text>
          </Box>
          <Text> </Text>
          <Box justifyContent="center" width={width}>
            <Text color="#CD853F" bold>{shareUrl}</Text>
          </Box>
          <Text> </Text>
          <Box justifyContent="center" width={width}>
            <Text color={cursor === 0 ? "#CD853F" : "#8B4513"}>
              {cursor === 0 ? "> " : "  "}{copied ? "Copied!" : "Copy URL"}
            </Text>
          </Box>
          <Text> </Text>
          <Box justifyContent="center" width={width}>
            <Text color="#D2691E">{clientCount} player{clientCount !== 1 ? "s" : ""} connected</Text>
          </Box>
          <Text> </Text>
          <Box justifyContent="center" width={width}>
            <Text color={tunnelOpen ? "#8B4513" : "#CD853F"} dimColor={tunnelOpen}>
              {tunnelOpen ? "Tunnel active" : "Tunnel disconnected — reconnecting..."}
            </Text>
          </Box>
        </>
      ) : (
        <Box justifyContent="center" width={width}>
          <Text color="#D2691E">Failed to start tunnel.</Text>
        </Box>
      )}
      <Text> </Text>
      <Box justifyContent="center" width={width}>
        <Text color="#8B4513" dimColor>{"(Esc to close)"}</Text>
      </Box>
    </Box>
  );
}

export function App({ serverUrl, password, gameDir, model, effort, debugMode, showHelp, onSessionInit, onClearSession, onModelChanged, onEffortChanged, onToggleHelp, onToggleDebug, onStartTunnel, onStopTunnel, isTunnelOpen, onBack, onQuit }: AppProps) {
  const { messages, currentToolCall, isProcessing, statusMessage, pendingQuestion, isConnected, authError, clientCount, sendMessage, answerQuestion, interrupt, clearSession, switchModel, switchEffort } =
    useClaudeSession({ serverUrl, password, onSessionInit, onClearSession, onModelChanged: onModelChanged, onEffortChanged: onEffortChanged });

  const [overlayMode, setOverlayMode] = useState<OverlayMode>("none");
  const [scrollRevision, setScrollRevision] = useState(0);
  const [tunnelUrl, setTunnelUrl] = useState<string | null>(null);
  const [tunnelLoading, setTunnelLoading] = useState(false);
  const [tunnelOpen, setTunnelOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [spellBrowserInitialSpell, setSpellBrowserInitialSpell] = useState<string | null>(null);
  const [returnToCharSheet, setReturnToCharSheet] = useState(false);
  const [savedCharSheetState, setSavedCharSheetState] = useState<CharacterSheetState | null>(null);

  // Poll tunnel status every 15s when tunnel is active
  useEffect(() => {
    if (!tunnelUrl || !isTunnelOpen) return;
    const interval = setInterval(() => {
      setTunnelOpen(isTunnelOpen());
    }, 15000);
    return () => clearInterval(interval);
  }, [tunnelUrl, isTunnelOpen]);

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;

  const helpVisible = showHelp && overlayMode === "none";
  const isCharSheet = overlayMode === "character-sheet";
  const isWideOverlay = isCharSheet || overlayMode === "spell-browser";
  const frameWidth = Math.min(isWideOverlay ? 120 : 80, terminalWidth);
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

  const modelLabel = model === "claude-opus-4-6" ? "Opus" : "Sonnet";
  const effortLabel = effort[0].toUpperCase() + effort.slice(1);

  useInput((input, key) => {
    if (key.escape && overlayMode === "none") {
      setOverlayMode("menu");
      return;
    }
    // Ctrl+P toggles character sheet (local games only)
    if (input === "p" && key.ctrl && gameDir) {
      setOverlayMode((m) => m === "character-sheet" ? "none" : "character-sheet");
      return;
    }
    // Ctrl+S toggles spell browser (local games only)
    if (input === "s" && key.ctrl && gameDir) {
      setOverlayMode((m) => m === "spell-browser" ? "none" : "spell-browser");
      setSpellBrowserInitialSpell(null);
      return;
    }
    // Ctrl+O toggles journal (local games only)
    if (input === "o" && key.ctrl && gameDir) {
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
      case "spell-browser":
        setOverlayMode("spell-browser");
        setSpellBrowserInitialSpell(null);
        break;
      case "share":
        setOverlayMode("share");
        if (onStartTunnel && !tunnelUrl) {
          setTunnelLoading(true);
          debug("Share: requesting tunnel start");
          onStartTunnel((status) => {
            setTunnelOpen(status.open);
            if (status.url) {
              setTunnelUrl(status.url);
            }
          }).then((url) => {
            debug("Share: tunnel ready at", url);
            setTunnelUrl(url);
            setTunnelOpen(true);
            setTunnelLoading(false);
          }).catch((err) => {
            debug("Share: tunnel failed:", err?.message ?? err);
            setTunnelLoading(false);
          });
        }
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
      case "switch-model": {
        const next = model === "claude-opus-4-6" ? "claude-sonnet-4-6" : "claude-opus-4-6";
        switchModel(next);
        break;
      }
      case "switch-effort": {
        const cycle: Record<string, EffortLevel> = { low: "medium", medium: "high", high: "low" };
        switchEffort(cycle[effort]);
        break;
      }
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
            ...(gameDir ? [{ label: "Character Sheets", action: "character-sheets" }] : []),
            ...(gameDir ? [{ label: "Spell Browser", action: "spell-browser" }] : []),
            ...(gameDir ? [{ label: "Journal", action: "journal" }] : []),
            ...(gameDir && onStartTunnel ? [{ label: "Share Game", action: "share" }] : []),
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
    if (overlayMode === "character-sheet" && gameDir) {
      return (
        <CharacterSheetViewer
          gameDir={gameDir}
          height={innerHeight}
          contentWidth={contentWidth}
          initialState={savedCharSheetState ?? undefined}
          onClose={() => {
            setSavedCharSheetState(null);
            setOverlayMode("none");
          }}
          onViewSpell={(spellName, state) => {
            setSavedCharSheetState(state);
            setSpellBrowserInitialSpell(spellName);
            setReturnToCharSheet(true);
            setOverlayMode("spell-browser");
          }}
        />
      );
    }
    if (overlayMode === "spell-browser" && gameDir) {
      return (
        <SpellBrowser
          gameDir={gameDir}
          height={innerHeight}
          contentWidth={contentWidth}
          initialSpell={spellBrowserInitialSpell ?? undefined}
          onClose={() => {
            if (returnToCharSheet) {
              setReturnToCharSheet(false);
              setOverlayMode("character-sheet");
            } else {
              setOverlayMode("none");
            }
            setSpellBrowserInitialSpell(null);
          }}
        />
      );
    }
    if (overlayMode === "journal" && gameDir) {
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
    if (overlayMode === "share") {
      const shareUrl = tunnelUrl ? `${tunnelUrl}?password=${password}` : null;
      return (
        <ShareOverlay
          loading={tunnelLoading}
          shareUrl={shareUrl}
          clientCount={clientCount}
          tunnelOpen={tunnelOpen}
          height={innerHeight}
          width={contentWidth}
          onClose={() => setOverlayMode("none")}
        />
      );
    }
    return null;
  };

  // Handle Esc on auth error to go back
  useInput((_input, key) => {
    if (key.escape && authError) {
      onBack();
    }
  }, { isActive: !!authError });

  if (!isConnected && !authError) {
    return (
      <Box width={terminalWidth} height={terminalHeight} justifyContent="center">
        <Box flexDirection="column" width={frameWidth} height={terminalHeight} borderStyle="round" borderColor={BORDER} paddingLeft={1} paddingRight={1} justifyContent="center" alignItems="center">
          <Text color="#D2691E">Connecting...</Text>
        </Box>
      </Box>
    );
  }

  if (authError) {
    return (
      <Box width={terminalWidth} height={terminalHeight} justifyContent="center">
        <Box flexDirection="column" width={frameWidth} height={terminalHeight} borderStyle="round" borderColor={BORDER} paddingLeft={1} paddingRight={1} justifyContent="center" alignItems="center">
          <Text color="#B8860B" bold>Connection Failed</Text>
          <Text> </Text>
          <Text color="#D2691E">{authError}</Text>
          <Text> </Text>
          <Text color="#8B4513" dimColor>{"Press Esc to go back"}</Text>
        </Box>
      </Box>
    );
  }

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
              <InputBar value={inputValue} onChange={setInputValue} onSubmit={sendMessage} isProcessing={isProcessing} disabled={overlayMode !== "none"} />
            )}
          </>
        )}
      </Box>
      {helpVisible && <HelpPanel />}
    </Box>
  );
}
