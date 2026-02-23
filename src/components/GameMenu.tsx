import React, { useState } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import TextInput from "ink-text-input";
import type { GameMeta } from "../types.js";
import { MenuOverlay } from "./MenuOverlay.js";

const BORDER = "#8B4513";

interface GameMenuProps {
  games: GameMeta[];
  campaigns: string[];
  onSelectGame: (id: string) => void;
  onCreateGame: (campaign: string) => void;
  onJoinRemote: (url: string, password: string) => void;
  onQuit: () => void;
}

type MenuState = "game-list" | "campaign-picker" | "join-remote";

export function GameMenu({ games, campaigns, onSelectGame, onCreateGame, onJoinRemote, onQuit }: GameMenuProps) {
  const [cursor, setCursor] = useState(0);
  const [menuState, setMenuState] = useState<MenuState>("game-list");
  const [showQuitMenu, setShowQuitMenu] = useState(false);
  const [remoteUrl, setRemoteUrl] = useState("");
  const [remotePassword, setRemotePassword] = useState("");
  const [joinStep, setJoinStep] = useState<"url" | "password">("url");

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;
  const frameWidth = Math.min(80, terminalWidth);

  const gameItems = [...games.map((g) => g.id), "+ Join Remote Game", "+ New Game"];

  useInput((_input, key) => {
    if (showQuitMenu) return;
    if (menuState === "game-list") {
      if (key.escape) {
        setShowQuitMenu(true);
        return;
      }
      if (key.upArrow) setCursor((c) => (c <= 0 ? gameItems.length - 1 : c - 1));
      if (key.downArrow) setCursor((c) => (c >= gameItems.length - 1 ? 0 : c + 1));
      if (key.return) {
        if (cursor === gameItems.length - 1) {
          // "+ New Game"
          setCursor(0);
          setMenuState("campaign-picker");
        } else if (cursor === gameItems.length - 2) {
          // "+ Join Remote Game"
          setRemoteUrl("");
          setRemotePassword("");
          setJoinStep("url");
          setMenuState("join-remote");
        } else {
          onSelectGame(games[cursor].id);
        }
      }
    } else if (menuState === "campaign-picker") {
      if (key.upArrow) setCursor((c) => (c <= 0 ? campaigns.length - 1 : c - 1));
      if (key.downArrow) setCursor((c) => (c >= campaigns.length - 1 ? 0 : c + 1));
      if (key.escape) {
        setCursor(gameItems.length - 1);
        setMenuState("game-list");
      }
      if (key.return) {
        onCreateGame(campaigns[cursor]);
      }
    } else if (menuState === "join-remote") {
      if (key.escape) {
        setCursor(gameItems.length - 2);
        setMenuState("game-list");
      }
    }
  });

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
        justifyContent="center"
        alignItems="center"
      >
        {showQuitMenu ? (
          <MenuOverlay
            title="=== Lairs & LLamas ==="
            items={[
              { label: "Resume", action: "resume" },
              { label: "Quit", action: "quit" },
            ]}
            onSelect={(action) => {
              if (action === "resume") setShowQuitMenu(false);
              else if (action === "quit") onQuit();
            }}
            onClose={() => setShowQuitMenu(false)}
            height={terminalHeight - 4}
            width={frameWidth - 4}
          />
        ) : (<>
        <Text color="#B8860B" bold>
          {"=== Lairs & LLamas ==="}
        </Text>
        <Text> </Text>
        {menuState === "game-list" ? (
          <>
            <Text color="#D2691E">Select a game or create a new one:</Text>
            <Text> </Text>
            {gameItems.map((item, i) => {
              let label: string;
              if (i < games.length) {
                label = `${games[i].campaign ?? "Game"} ${games[i].id.slice(0, 8)} (${new Date(games[i].lastPlayedAt).toLocaleDateString()})`;
              } else {
                label = item;
              }
              return (
                <Text key={item} color={i === cursor ? "#CD853F" : "#8B4513"}>
                  {i === cursor ? "> " : "  "}
                  {label}
                </Text>
              );
            })}
          </>
        ) : menuState === "campaign-picker" ? (
          <>
            <Text color="#D2691E">Choose a campaign:</Text>
            <Text> </Text>
            {campaigns.map((name, i) => (
              <Text key={name} color={i === cursor ? "#CD853F" : "#8B4513"}>
                {i === cursor ? "> " : "  "}
                {name}
              </Text>
            ))}
            <Text> </Text>
            <Text color="#8B4513" dimColor>{"(Esc to go back)"}</Text>
          </>
        ) : (
          <>
            <Text color="#D2691E">{joinStep === "url" ? "Enter game URL:" : "Enter password:"}</Text>
            <Text> </Text>
            <Box>
              <Text color="#CD853F">{"> "}</Text>
              <TextInput
                value={joinStep === "url" ? remoteUrl : remotePassword}
                onChange={joinStep === "url" ? setRemoteUrl : setRemotePassword}
                onSubmit={(value) => {
                  if (joinStep === "url") {
                    try {
                      const parsed = new URL(value);
                      const pw = parsed.searchParams.get("password");
                      if (pw) {
                        parsed.searchParams.delete("password");
                        const wsUrl = parsed.toString().replace(/^http/, "ws");
                        onJoinRemote(wsUrl, pw);
                      } else {
                        setRemoteUrl(value);
                        setJoinStep("password");
                      }
                    } catch {
                      // Not a valid URL, try as-is with ws:// prefix
                      setRemoteUrl(value);
                      setJoinStep("password");
                    }
                  } else {
                    const wsUrl = remoteUrl.startsWith("ws") ? remoteUrl : remoteUrl.replace(/^http/, "ws");
                    onJoinRemote(wsUrl, value);
                  }
                }}
              />
            </Box>
            <Text> </Text>
            <Text color="#8B4513" dimColor>{"(Esc to go back)"}</Text>
          </>
        )}
        </>)}
      </Box>
    </Box>
  );
}
