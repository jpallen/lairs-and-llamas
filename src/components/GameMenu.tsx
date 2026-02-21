import React, { useState } from "react";
import { Box, Text, useInput, useStdout } from "ink";
import type { GameMeta } from "../types.js";
import { MenuOverlay } from "./MenuOverlay.js";

const BORDER = "#8B4513";

interface GameMenuProps {
  games: GameMeta[];
  campaigns: string[];
  onSelectGame: (id: string) => void;
  onCreateGame: (campaign: string) => void;
  onQuit: () => void;
}

type MenuState = "game-list" | "campaign-picker";

export function GameMenu({ games, campaigns, onSelectGame, onCreateGame, onQuit }: GameMenuProps) {
  const [cursor, setCursor] = useState(0);
  const [menuState, setMenuState] = useState<MenuState>("game-list");
  const [showQuitMenu, setShowQuitMenu] = useState(false);

  const { stdout } = useStdout();
  const terminalHeight = stdout?.rows ?? 24;
  const terminalWidth = stdout?.columns ?? 80;
  const frameWidth = Math.min(80, terminalWidth);

  const gameItems = [...games.map((g) => g.id), "+ New Game"];

  useInput((_input, key) => {
    if (showQuitMenu) return;
    if (menuState === "game-list") {
      if (key.escape) {
        setShowQuitMenu(true);
        return;
      }
      if (key.upArrow) setCursor((c) => Math.max(0, c - 1));
      if (key.downArrow) setCursor((c) => Math.min(gameItems.length - 1, c + 1));
      if (key.return) {
        if (cursor === gameItems.length - 1) {
          setCursor(0);
          setMenuState("campaign-picker");
        } else {
          onSelectGame(games[cursor].id);
        }
      }
    } else if (menuState === "campaign-picker") {
      if (key.upArrow) setCursor((c) => Math.max(0, c - 1));
      if (key.downArrow) setCursor((c) => Math.min(campaigns.length - 1, c + 1));
      if (key.escape) {
        setCursor(gameItems.length - 1);
        setMenuState("game-list");
      }
      if (key.return) {
        onCreateGame(campaigns[cursor]);
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
            {gameItems.map((item, i) => (
              <Text key={item} color={i === cursor ? "#CD853F" : "#8B4513"}>
                {i === cursor ? "> " : "  "}
                {i < games.length
                  ? `${games[i].campaign ?? "Game"} ${games[i].id.slice(0, 8)} (${new Date(games[i].lastPlayedAt).toLocaleDateString()})`
                  : item}
              </Text>
            ))}
          </>
        ) : (
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
        )}
        </>)}
      </Box>
    </Box>
  );
}
