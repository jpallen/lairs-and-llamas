import { appendFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const logPath = join(projectRoot, "debug.log");

export function clearDebugLog() {
  writeFileSync(logPath, "");
}

export function debug(...args: unknown[]) {
  const timestamp = new Date().toISOString().slice(11, 23);
  const msg = args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a, null, 2)))
    .join(" ");
  appendFileSync(logPath, `[${timestamp}] ${msg}\n`);
}
