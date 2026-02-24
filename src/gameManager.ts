import { homedir } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile, cp, writeFile, readdir, mkdir, stat } from "fs/promises";
import { parseDiceOutput, summarizeToolInput } from "./types.js";
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

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

export async function loadSettings(): Promise<AppSettings> {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(await readFile(SETTINGS_PATH, "utf-8")) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  await mkdir(APP_BASE, { recursive: true });
  await writeFile(SETTINGS_PATH, JSON.stringify(settings, null, 2));
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

export async function listGames(): Promise<GameMeta[]> {
  if (!(await exists(GAMES_BASE))) return [];
  const entries = await readdir(GAMES_BASE, { withFileTypes: true });
  const games: GameMeta[] = [];
  for (const d of entries) {
    if (!d.isDirectory()) continue;
    const metaPath = join(GAMES_BASE, d.name, "game.json");
    if (!(await exists(metaPath))) continue;
    try {
      games.push(JSON.parse(await readFile(metaPath, "utf-8")) as GameMeta);
    } catch { /* skip corrupt entries */ }
  }
  return games.sort((a, b) => b.lastPlayedAt.localeCompare(a.lastPlayedAt));
}

export async function listCampaigns(): Promise<string[]> {
  const campaignsDir = join(getTemplatesDir(), "campaigns");
  if (!(await exists(campaignsDir))) return [];
  const entries = await readdir(campaignsDir, { withFileTypes: true });
  return entries
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export async function createGame(campaign: string): Promise<GameMeta> {
  const id = crypto.randomUUID();
  const gameDir = getGameDir(id);

  const templatesDir = getTemplatesDir();
  await mkdir(gameDir, { recursive: true });

  // Copy shared files
  for (const file of ["roll_dice.py", "JOURNAL.md"]) {
    await cp(join(templatesDir, file), join(gameDir, file));
  }

  // Copy shared directories
  for (const dir of ["Rules", "CharacterSheets"]) {
    await cp(join(templatesDir, dir), join(gameDir, dir), { recursive: true });
  }

  // Overlay campaign-specific files
  const campaignDir = join(templatesDir, "campaigns", campaign);
  if (await exists(join(campaignDir, "Campaign"))) {
    await cp(join(campaignDir, "Campaign"), join(gameDir, "Campaign"), { recursive: true });
  }

  const meta: GameMeta = {
    id,
    sessionId: null,
    createdAt: new Date().toISOString(),
    lastPlayedAt: new Date().toISOString(),
    campaign,
    password: generatePassword(),
  };
  await writeFile(join(gameDir, "game.json"), JSON.stringify(meta, null, 2));
  return meta;
}

export async function syncTemplateFiles(id: string): Promise<void> {
  const gameDir = getGameDir(id);
  const templatesDir = getTemplatesDir();
  await cp(join(templatesDir, "roll_dice.py"), join(gameDir, "roll_dice.py"));
}

export async function loadGameMeta(id: string): Promise<GameMeta> {
  const metaPath = join(getGameDir(id), "game.json");
  const meta = JSON.parse(await readFile(metaPath, "utf-8")) as GameMeta;
  if (!meta.password) {
    meta.password = generatePassword();
    await writeFile(metaPath, JSON.stringify(meta, null, 2));
  }
  return meta;
}

export async function saveGameMeta(meta: GameMeta): Promise<void> {
  const metaPath = join(getGameDir(meta.id), "game.json");
  await writeFile(metaPath, JSON.stringify(meta, null, 2));
}

export async function readSystemPrompt(): Promise<string> {
  return readFile(getSystemPromptPath(), "utf-8");
}

function encodePathForClaude(dir: string): string {
  return dir.replace(/[/.]/g, "-");
}

const PARSE_CHUNK_SIZE = 100;

async function parseSessionLines(text: string): Promise<ChatMessage[]> {
  const lines = text.trim().split("\n");
  const messages: ChatMessage[] = [];
  let processed = 0;

  for (const line of lines) {
    // Yield to the event loop periodically so animations can render
    if (++processed % PARSE_CHUNK_SIZE === 0) {
      await new Promise<void>((r) => setTimeout(r, 0));
    }

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
        // Extract tool_use blocks
        for (const block of content) {
          if (block.type === "tool_use") {
            const input = block.input as Record<string, unknown>;
            messages.push({
              id: `${entry.uuid}-tool-${block.id}`,
              role: "tool",
              content: summarizeToolInput(block.name, input),
              toolName: block.name,
              isStreaming: false,
            });
          }
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

export async function loadSessionHistory(gameId: string, sessionId: string): Promise<ChatMessage[]> {
  const gameDir = getGameDir(gameId);
  const encoded = encodePathForClaude(gameDir);
  const sessionFile = join(homedir(), ".claude", "projects", encoded, `${sessionId}.jsonl`);
  try {
    const text = await readFile(sessionFile, "utf-8");
    return parseSessionLines(text);
  } catch {
    return [];
  }
}
