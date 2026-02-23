import React, { useState, useCallback, useEffect } from "react";
import { render } from "ink";
import { readFileSync } from "fs";
import { App } from "./App.js";
import { GameMenu } from "./components/GameMenu.js";
import { DiceDemo } from "./components/Dice.js";
import {
  listGames,
  listCampaigns,
  createGame,
  loadGameMeta,
  saveGameMeta,
  getGameDir,
  loadSessionHistory,
  syncTemplateFiles,
  loadSettings,
  saveSettings,
  getSystemPromptPath,
} from "./gameManager.js";
import type { EffortLevel } from "./gameManager.js";
import { startGameServer, stopGameServer, stopAllServers, startTunnel, stopTunnel, isTunnelOpen } from "./server/index.js";
import { debug, clearDebugLog } from "./debug.js";
import { createFilteredStdin, cleanup } from "./mouseFilter.js";
import type { ChatMessage, GameMeta } from "./types.js";

clearDebugLog();

const initialDebugMode = process.argv.includes("--debug");
const diceDemo = process.argv.includes("--dice");

function Main() {
  const [selectedGame, setSelectedGame] = useState<GameMeta | null>(null);
  const [serverPort, setServerPort] = useState<number | null>(null);
  const [remoteConnection, setRemoteConnection] = useState<{ url: string; password: string } | null>(null);
  const [games, setGames] = useState(() => listGames());
  const [debugMode, setDebugMode] = useState(initialDebugMode);
  const [showHelp, setShowHelp] = useState(() => loadSettings().showHelp);
  const [model, setModel] = useState(() => loadSettings().model ?? "claude-opus-4-6");
  const [effort, setEffort] = useState<EffortLevel>(() => loadSettings().effort ?? "medium");

  const handleSelectGame = useCallback((id: string) => {
    syncTemplateFiles(id);
    const meta = loadGameMeta(id);
    meta.lastPlayedAt = new Date().toISOString();
    saveGameMeta(meta);

    const gameDir = getGameDir(meta.id);
    const systemPrompt = readFileSync(getSystemPromptPath(), "utf-8");
    const settings = loadSettings();
    const currentModel = settings.model ?? "claude-opus-4-6";
    const currentEffort = settings.effort ?? "medium";

    let initialMessages: ChatMessage[] = [];
    if (meta.sessionId) {
      initialMessages = loadSessionHistory(meta.id, meta.sessionId);
      if (!initialDebugMode) {
        initialMessages = initialMessages.filter((m) => m.role !== "thinking");
      }
    }

    setSelectedGame(meta);
    setModel(currentModel);
    setEffort(currentEffort);

    startGameServer(meta.id, {
      systemPrompt,
      cwd: gameDir,
      model: currentModel,
      effort: currentEffort,
      password: meta.password,
      initialSessionId: meta.sessionId,
      initialMessages,
    }).then(({ port }) => {
      debug("Game server ready on port", port);
      setServerPort(port);
    });
  }, []);

  const handleCreateGame = useCallback((campaign: string) => {
    const meta = createGame(campaign);
    setGames(listGames());

    const gameDir = getGameDir(meta.id);
    const systemPrompt = readFileSync(getSystemPromptPath(), "utf-8");
    const settings = loadSettings();
    const currentModel = settings.model ?? "claude-opus-4-6";
    const currentEffort = settings.effort ?? "medium";

    setSelectedGame(meta);
    setModel(currentModel);
    setEffort(currentEffort);

    startGameServer(meta.id, {
      systemPrompt,
      cwd: gameDir,
      model: currentModel,
      effort: currentEffort,
      password: meta.password,
      initialSessionId: null,
      initialMessages: [],
      initialPrompt: "Begin the adventure",
    }).then(({ port }) => {
      debug("Game server ready on port", port);
      setServerPort(port);
    });
  }, []);

  const handleJoinRemote = useCallback((url: string, password: string) => {
    setRemoteConnection({ url, password });
  }, []);

  const handleSessionInit = useCallback(
    (sessionId: string) => {
      if (!selectedGame) return;
      const updated = { ...selectedGame, sessionId };
      saveGameMeta(updated);
      setSelectedGame(updated);
    },
    [selectedGame]
  );

  const handleBack = useCallback(() => {
    if (selectedGame) {
      stopTunnel(selectedGame.id);
      stopGameServer(selectedGame.id);
    }
    setSelectedGame(null);
    setServerPort(null);
    setRemoteConnection(null);
  }, [selectedGame]);

  // Remote connection mode
  if (remoteConnection) {
    return (
      <App
        serverUrl={remoteConnection.url}
        password={remoteConnection.password}
        gameDir={null}
        model={model}
        effort={effort}
        debugMode={debugMode}
        showHelp={showHelp}
        onSessionInit={() => {}}
        onClearSession={() => {}}
        onModelChanged={(m) => {
          setModel(m);
          const settings = loadSettings();
          saveSettings({ ...settings, model: m });
        }}
        onEffortChanged={(e) => {
          setEffort(e);
          const settings = loadSettings();
          saveSettings({ ...settings, effort: e });
        }}
        onToggleHelp={() => setShowHelp((h) => {
          const next = !h;
          const settings = loadSettings();
          saveSettings({ ...settings, showHelp: next });
          return next;
        })}
        onToggleDebug={() => setDebugMode((d) => !d)}
        onBack={() => setRemoteConnection(null)}
        onQuit={() => { cleanup(); process.exit(0); }}
      />
    );
  }

  if (!selectedGame || serverPort === null) {
    if (selectedGame && serverPort === null) {
      // Server is starting up, show nothing (brief flash)
      return null;
    }
    return (
      <GameMenu
        games={games}
        campaigns={listCampaigns()}
        onSelectGame={handleSelectGame}
        onCreateGame={handleCreateGame}
        onJoinRemote={handleJoinRemote}
        onQuit={() => { stopAllServers().then(() => { cleanup(); process.exit(0); }); }}
      />
    );
  }

  const gameDir = getGameDir(selectedGame.id);

  return (
    <App
      serverUrl={`ws://127.0.0.1:${serverPort}`}
      password={selectedGame.password}
      gameDir={gameDir}
      model={model}
      effort={effort}
      debugMode={debugMode}
      showHelp={showHelp}
      onSessionInit={handleSessionInit}
      onClearSession={() => {
        if (selectedGame) {
          const updated = { ...selectedGame, sessionId: null };
          saveGameMeta(updated);
          setSelectedGame(updated);
        }
      }}
      onModelChanged={(m) => {
        setModel(m);
        const settings = loadSettings();
        saveSettings({ ...settings, model: m });
      }}
      onEffortChanged={(e) => {
        setEffort(e);
        const settings = loadSettings();
        saveSettings({ ...settings, effort: e });
      }}
      onToggleHelp={() => setShowHelp((h) => {
        const next = !h;
        const settings = loadSettings();
        saveSettings({ ...settings, showHelp: next });
        return next;
      })}
      onToggleDebug={() => setDebugMode((d) => !d)}
      onStartTunnel={(onStatusChange) => startTunnel(selectedGame.id, onStatusChange)}
      onStopTunnel={() => stopTunnel(selectedGame.id)}
      isTunnelOpen={() => isTunnelOpen(selectedGame.id)}
      onBack={handleBack}
      onQuit={() => { stopAllServers().then(() => { cleanup(); process.exit(0); }); }}
    />
  );
}

if (diceDemo) {
  render(<DiceDemo rolling />);
} else {
  debug("Starting app, debugMode:", initialDebugMode);
  const filteredStdin = createFilteredStdin(process.stdin);
  const instance = render(<Main />, { stdin: filteredStdin } as any);
  const originalUnmount = instance.unmount.bind(instance);
  instance.unmount = () => {
    cleanup();
    originalUnmount();
  };

  const exitHandler = () => { stopAllServers().then(() => { cleanup(); process.exit(); }); };
  process.on("SIGINT", exitHandler);
  process.on("SIGTERM", exitHandler);
  process.on("uncaughtException", () => { cleanup(); process.exit(1); });
  process.on("unhandledRejection", () => { cleanup(); process.exit(1); });
  process.on("exit", () => cleanup());
}
