import React from "react";
import { render } from "ink";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { App } from "./App.js";
import { DiceDemo } from "./components/Dice.js";
import { debug } from "./debug.js";

// Clear log on startup
writeFileSync(resolve(process.cwd(), "debug.log"), "");

const cwd = process.cwd();
const debugMode = process.argv.includes("--debug");
const diceDemo = process.argv.includes("--dice");

if (diceDemo) {
  render(<DiceDemo rolling />);
} else {
  const systemPromptPath = resolve(cwd, "SYSTEM.md");

  debug("Starting app, cwd:", cwd, "debugMode:", debugMode);
  debug("Reading SYSTEM.md from:", systemPromptPath);

  const systemPrompt = readFileSync(systemPromptPath, "utf-8");
  debug("SYSTEM.md loaded, length:", systemPrompt.length);

  render(<App systemPrompt={systemPrompt} cwd={cwd} debugMode={debugMode} />);
  debug("Ink render called");
}
