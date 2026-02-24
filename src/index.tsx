import React, { useState, useCallback, useEffect } from "react";
import { Box, Text, render, useStdout } from "ink";
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
  readSystemPrompt,
  loadSettings,
  saveSettings,
} from "./gameManager.js";
import type { EffortLevel } from "./gameManager.js";
import { startGameServer, stopGameServer, stopAllServers, startTunnel, stopTunnel, isTunnelOpen } from "./server/index.js";
import { debug, clearDebugLog } from "./debug.js";
import { createFilteredStdin, cleanup } from "./mouseFilter.js";
import type { ChatMessage, GameMeta } from "./types.js";

clearDebugLog();

const initialDebugMode = process.argv.includes("--debug");
const diceDemo = process.argv.includes("--dice");

const BORDER = "#8B4513";

const TORCH_FRAMES = [
  ["  (  ", " (#) ", " (#) ", "  |  "],
  [" (%} ", "(#%) ", " {#) ", "  |  "],
  ["  }  ", " {#} ", " (#} ", "  |  "],
  [" {%( ", " %#( ", " (#% ", "  |  "],
];

const FLAME_COLORS = ["#FF6B35", "#CD853F", "#B8860B", "#FF8C42"];

function LoadingScreen({ campaign }: { campaign: string }) {
  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;
  const frameWidth = Math.min(80, terminalWidth);

  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => (f + 1) % TORCH_FRAMES.length), 200);
    return () => clearInterval(interval);
  }, []);

  const torch = TORCH_FRAMES[frame];
  const flameColor = FLAME_COLORS[frame];

  return (
    <Box width={terminalWidth} height={terminalHeight} justifyContent="center">
      <Box
        flexDirection="column"
        width={frameWidth}
        height={terminalHeight}
        borderStyle="round"
        borderColor={BORDER}
        paddingLeft={1}
        paddingRight={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text> </Text>
        {torch.map((line, i) => (
          <Text key={i} color={i < 3 ? flameColor : "#8B4513"}>{line}</Text>
        ))}
        <Text> </Text>
        <Text color="#B8860B" bold>Preparing Your Adventure</Text>
        <Text> </Text>
        <Text color="#D2691E">{campaign}</Text>
        <Text> </Text>
      </Box>
    </Box>
  );
}

function Main() {
  const [selectedGame, setSelectedGame] = useState<GameMeta | null>(null);
  const [serverPort, setServerPort] = useState<number | null>(null);
  const [remoteConnection, setRemoteConnection] = useState<{ url: string; password: string } | null>(null);
  const [games, setGames] = useState<GameMeta[]>([]);
  const [campaigns, setCampaigns] = useState<string[]>([]);
  const [debugMode, setDebugMode] = useState(initialDebugMode);
  const [showHelp, setShowHelp] = useState(true);
  const [model, setModel] = useState("claude-opus-4-6");
  const [effort, setEffort] = useState<EffortLevel>("medium");
  const [ready, setReady] = useState(false);

  // Load initial data asynchronously
  useEffect(() => {
    (async () => {
      const [g, c, s] = await Promise.all([listGames(), listCampaigns(), loadSettings()]);
      setGames(g);
      setCampaigns(c);
      setShowHelp(s.showHelp);
      setModel(s.model ?? "claude-opus-4-6");
      setEffort(s.effort ?? "medium");
      setReady(true);
    })();
  }, []);

  const handleSelectGame = useCallback(async (id: string) => {
    const meta = await loadGameMeta(id);
    setSelectedGame(meta);

    await syncTemplateFiles(id);
    meta.lastPlayedAt = new Date().toISOString();
    await saveGameMeta(meta);

    const gameDir = getGameDir(meta.id);
    const systemPrompt = await readSystemPrompt();
    const settings = await loadSettings();
    const currentModel = settings.model ?? "claude-opus-4-6";
    const currentEffort = settings.effort ?? "medium";

    let initialMessages: ChatMessage[] = [];
    if (meta.sessionId) {
      initialMessages = await loadSessionHistory(meta.id, meta.sessionId);
    }

    setModel(currentModel);
    setEffort(currentEffort);

    const { port } = await startGameServer(meta.id, {
      systemPrompt,
      cwd: gameDir,
      model: currentModel,
      effort: currentEffort,
      password: meta.password,
      initialSessionId: meta.sessionId,
      initialMessages,
    });
    debug("Game server ready on port", port);
    setServerPort(port);
  }, []);

  const handleCreateGame = useCallback(async (campaign: string) => {
    const meta = await createGame(campaign);
    setGames(await listGames());
    setSelectedGame(meta);

    const gameDir = getGameDir(meta.id);
    const systemPrompt = await readSystemPrompt();
    const settings = await loadSettings();
    const currentModel = settings.model ?? "claude-opus-4-6";
    const currentEffort = settings.effort ?? "medium";

    setModel(currentModel);
    setEffort(currentEffort);

    const { port } = await startGameServer(meta.id, {
      systemPrompt,
      cwd: gameDir,
      model: currentModel,
      effort: currentEffort,
      password: meta.password,
      initialSessionId: null,
      initialMessages: [],
      initialPrompt: "Begin the adventure",
    });
    debug("Game server ready on port", port);
    setServerPort(port);
  }, []);

  const handleJoinRemote = useCallback((url: string, password: string) => {
    setRemoteConnection({ url, password });
  }, []);

  const handleSessionInit = useCallback(
    async (sessionId: string) => {
      if (!selectedGame) return;
      const updated = { ...selectedGame, sessionId };
      await saveGameMeta(updated);
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
        onModelChanged={async (m) => {
          setModel(m);
          const settings = await loadSettings();
          await saveSettings({ ...settings, model: m });
        }}
        onEffortChanged={async (e) => {
          setEffort(e);
          const settings = await loadSettings();
          await saveSettings({ ...settings, effort: e });
        }}
        onToggleHelp={() => setShowHelp((h) => {
          const next = !h;
          loadSettings().then((s) => saveSettings({ ...s, showHelp: next }));
          return next;
        })}
        onToggleDebug={() => setDebugMode((d) => !d)}
        onBack={() => setRemoteConnection(null)}
        onQuit={() => { cleanup(); process.exit(0); }}
      />
    );
  }

  if (!ready) return null;

  if (!selectedGame || serverPort === null) {
    if (selectedGame && serverPort === null) {
      return <LoadingScreen campaign={selectedGame.campaign ?? selectedGame.id} />;
    }
    return (
      <GameMenu
        games={games}
        campaigns={campaigns}
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
      onClearSession={async () => {
        if (selectedGame) {
          const updated = { ...selectedGame, sessionId: null };
          await saveGameMeta(updated);
          setSelectedGame(updated);
        }
      }}
      onModelChanged={async (m) => {
        setModel(m);
        const settings = await loadSettings();
        await saveSettings({ ...settings, model: m });
      }}
      onEffortChanged={async (e) => {
        setEffort(e);
        const settings = await loadSettings();
        await saveSettings({ ...settings, effort: e });
      }}
      onToggleHelp={() => setShowHelp((h) => {
        const next = !h;
        loadSettings().then((s) => saveSettings({ ...s, showHelp: next }));
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
