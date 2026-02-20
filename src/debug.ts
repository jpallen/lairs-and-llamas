import { appendFileSync } from "fs";
import { resolve } from "path";

const logPath = resolve(process.cwd(), "debug.log");

export function debug(...args: unknown[]) {
  const timestamp = new Date().toISOString().slice(11, 23);
  const msg = args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a, null, 2)))
    .join(" ");
  appendFileSync(logPath, `[${timestamp}] ${msg}\n`);
}
