import React, { useState, useCallback } from "react";
import { render } from "ink";
import { readFileSync } from "fs";
import { join } from "path";
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
} from "./gameManager.js";
import { debug, clearDebugLog } from "./debug.js";
import { createFilteredStdin, cleanup } from "./mouseFilter.js";
import type { ChatMessage, GameMeta } from "./types.js";

clearDebugLog();

const debugMode = process.argv.includes("--debug");
const diceDemo = process.argv.includes("--dice");

function Main() {
  const [selectedGame, setSelectedGame] = useState<GameMeta | null>(null);
  const [sessionHistory, setSessionHistory] = useState<ChatMessage[]>([]);
  const [initialPrompt, setInitialPrompt] = useState<string | undefined>(undefined);
  const [games, setGames] = useState(() => listGames());

  const handleSelectGame = useCallback((id: string) => {
    syncTemplateFiles(id);
    const meta = loadGameMeta(id);
    meta.lastPlayedAt = new Date().toISOString();
    saveGameMeta(meta);
    if (meta.sessionId) {
      let history = loadSessionHistory(meta.id, meta.sessionId);
      if (!debugMode) {
        history = history.filter((m) => m.role !== "thinking");
      }
      setSessionHistory(history);
    }
    setSelectedGame(meta);
  }, []);

  const handleCreateGame = useCallback((campaign: string) => {
    const meta = createGame(campaign);
    setGames(listGames());
    setInitialPrompt("Begin the adventure");
    setSelectedGame(meta);
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

  if (!selectedGame) {
    return (
      <GameMenu
        games={games}
        campaigns={listCampaigns()}
        onSelectGame={handleSelectGame}
        onCreateGame={handleCreateGame}
      />
    );
  }

  const gameDir = getGameDir(selectedGame.id);
  const systemPrompt = readFileSync(join(gameDir, "SYSTEM.md"), "utf-8");

  return (
    <App
      systemPrompt={systemPrompt}
      cwd={gameDir}
      debugMode={debugMode}
      initialSessionId={selectedGame.sessionId}
      initialMessages={sessionHistory}
      initialPrompt={initialPrompt}
      onSessionInit={handleSessionInit}
    />
  );
}

if (diceDemo) {
  render(<DiceDemo rolling />);
} else {
  debug("Starting app, debugMode:", debugMode);
  const filteredStdin = createFilteredStdin(process.stdin);
  const instance = render(<Main />, { stdin: filteredStdin } as any);
  const originalUnmount = instance.unmount.bind(instance);
  instance.unmount = () => {
    cleanup();
    originalUnmount();
  };

  process.on("SIGINT", () => { cleanup(); process.exit(); });
  process.on("SIGTERM", () => { cleanup(); process.exit(); });
  process.on("uncaughtException", () => { cleanup(); process.exit(1); });
  process.on("unhandledRejection", () => { cleanup(); process.exit(1); });
  process.on("exit", () => cleanup());
}
