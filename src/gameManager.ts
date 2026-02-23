import { homedir } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  existsSync,
  mkdirSync,
  cpSync,
  readFileSync,
  writeFileSync,
  readdirSync,
} from "fs";
import { parseDiceOutput } from "./types.js";
import type { GameMeta, ChatMessage } from "./types.js";

const APP_BASE = join(homedir(), ".lairs-and-llamas");
const GAMES_BASE = join(APP_BASE, "games");
const SETTINGS_PATH = join(APP_BASE, "settings.json");

export type EffortLevel = "low" | "medium" | "high";

export interface AppSettings {
  showHelp: boolean;
  model?: string;
  effort?: EffortLevel;
  [key: string]: unknown;
}

const DEFAULT_SETTINGS: AppSettings = { showHelp: true };

const PASSWORD_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

export function generatePassword(): string {
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += PASSWORD_CHARS[Math.floor(Math.random() * PASSWORD_CHARS.length)];
  }
  return result;
}

export function loadSettings(): AppSettings {
  if (!existsSync(SETTINGS_PATH)) return { ...DEFAULT_SETTINGS };
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(readFileSync(SETTINGS_PATH, "utf-8")) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings: AppSettings): void {
  mkdirSync(APP_BASE, { recursive: true });
  writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
}

function getProjectRoot(): string {
  return join(dirname(fileURLToPath(import.meta.url)), "..");
}

function getTemplatesDir(): string {
  return join(getProjectRoot(), "templates");
}

export function getGameDir(id: string): string {
  return join(GAMES_BASE, id);
}

export function getSystemPromptPath(): string {
  return join(getTemplatesDir(), "SYSTEM.md");
}

export function listGames(): GameMeta[] {
  if (!existsSync(GAMES_BASE)) return [];
  return readdirSync(GAMES_BASE, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const metaPath = join(GAMES_BASE, d.name, "game.json");
      if (!existsSync(metaPath)) return null;
      return JSON.parse(readFileSync(metaPath, "utf-8")) as GameMeta;
    })
    .filter((g): g is GameMeta => g !== null)
    .sort((a, b) => b.lastPlayedAt.localeCompare(a.lastPlayedAt));
}

export function listCampaigns(): string[] {
  const campaignsDir = join(getTemplatesDir(), "campaigns");
  if (!existsSync(campaignsDir)) return [];
  return readdirSync(campaignsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export function createGame(campaign: string): GameMeta {
  const id = crypto.randomUUID();
  const gameDir = getGameDir(id);

  const templatesDir = getTemplatesDir();
  mkdirSync(gameDir, { recursive: true });

  // Copy shared files
  for (const file of ["roll_dice.py", "JOURNAL.md"]) {
    cpSync(join(templatesDir, file), join(gameDir, file));
  }

  // Copy shared directories
  for (const dir of ["Rules", "CharacterSheets", ".claude"]) {
    cpSync(join(templatesDir, dir), join(gameDir, dir), { recursive: true });
  }

  // Overlay campaign-specific files
  const campaignDir = join(templatesDir, "campaigns", campaign);
  if (existsSync(join(campaignDir, "Campaign"))) {
    cpSync(join(campaignDir, "Campaign"), join(gameDir, "Campaign"), { recursive: true });
  }

  const meta: GameMeta = {
    id,
    sessionId: null,
    createdAt: new Date().toISOString(),
    lastPlayedAt: new Date().toISOString(),
    campaign,
    password: generatePassword(),
  };
  writeFileSync(join(gameDir, "game.json"), JSON.stringify(meta, null, 2));
  return meta;
}

export function syncTemplateFiles(id: string): void {
  const gameDir = getGameDir(id);
  const templatesDir = getTemplatesDir();
  cpSync(join(templatesDir, "roll_dice.py"), join(gameDir, "roll_dice.py"));
}

export function loadGameMeta(id: string): GameMeta {
  const metaPath = join(getGameDir(id), "game.json");
  const meta = JSON.parse(readFileSync(metaPath, "utf-8")) as GameMeta;
  if (!meta.password) {
    meta.password = generatePassword();
    writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  }
  return meta;
}

export function saveGameMeta(meta: GameMeta): void {
  const metaPath = join(getGameDir(meta.id), "game.json");
  writeFileSync(metaPath, JSON.stringify(meta, null, 2));
}

function encodePathForClaude(dir: string): string {
  return dir.replace(/[/.]/g, "-");
}

export function loadSessionHistory(gameId: string, sessionId: string): ChatMessage[] {
  const gameDir = getGameDir(gameId);
  const encoded = encodePathForClaude(gameDir);
  const sessionFile = join(homedir(), ".claude", "projects", encoded, `${sessionId}.jsonl`);

  if (!existsSync(sessionFile)) return [];

  const lines = readFileSync(sessionFile, "utf-8").trim().split("\n");
  const messages: ChatMessage[] = [];

  for (const line of lines) {
    let entry: any;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }

    // Skip non-message entries
    if (entry.isMeta) continue;
    if (entry.isVisibleInTranscriptOnly) continue;

    if (entry.type === "user" && entry.message?.role === "user") {
      const content = entry.message.content;
      // String content (direct text)
      if (typeof content === "string") {
        messages.push({
          id: entry.uuid,
          role: "user",
          content,
          isStreaming: false,
        });
        continue;
      }
      if (Array.isArray(content)) {
        // Extract user text messages
        const textBlocks = content.filter((b: any) => b.type === "text");
        if (textBlocks.length > 0) {
          messages.push({
            id: entry.uuid,
            role: "user",
            content: textBlocks.map((b: any) => b.text).join(""),
            isStreaming: false,
          });
        }
        // Extract dice rolls from tool results
        for (const block of content) {
          if (block.type !== "tool_result") continue;
          const resultText =
            typeof block.content === "string"
              ? block.content
              : Array.isArray(block.content)
                ? block.content.map((c: any) => c.text ?? "").join("")
                : "";
          const rolls = parseDiceOutput(resultText);
          if (rolls.length > 0) {
            messages.push({
              id: `${entry.uuid}-dice-${block.tool_use_id}`,
              role: "dice",
              content: resultText,
              isStreaming: false,
              diceRolls: rolls,
            });
          }
        }
      }
    }

    if (entry.type === "assistant" && entry.message?.role === "assistant") {
      const content = entry.message.content;
      if (Array.isArray(content)) {
        // Extract thinking blocks
        const thinkingBlocks = content.filter((b: any) => b.type === "thinking");
        if (thinkingBlocks.length > 0) {
          messages.push({
            id: `${entry.uuid}-thinking`,
            role: "thinking",
            content: thinkingBlocks.map((b: any) => b.thinking).join(""),
            isStreaming: false,
          });
        }
        // Extract text blocks
        const textBlocks = content.filter((b: any) => b.type === "text");
        if (textBlocks.length > 0) {
          messages.push({
            id: entry.uuid,
            role: "assistant",
            content: textBlocks.map((b: any) => b.text).join(""),
            isStreaming: false,
          });
        }
      }
    }
  }

  return messages;
}
