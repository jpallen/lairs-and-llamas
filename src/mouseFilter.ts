import { PassThrough } from "stream";
import { EventEmitter } from "events";

// SGR mouse sequence: \x1b[<button;x;yM or \x1b[<button;x;ym
const MOUSE_SGR_RE = /\x1b\[<(\d+);\d+;\d+[Mm]/g;

export const mouseEvents = new EventEmitter();

export function createFilteredStdin(stdin: NodeJS.ReadStream): PassThrough {
  const filtered = new PassThrough();

  // Proxy TTY properties and methods that Ink expects
  (filtered as any).isTTY = stdin.isTTY;
  (filtered as any).setRawMode = (mode: boolean) => {
    if (stdin.setRawMode) stdin.setRawMode(mode);
    return filtered;
  };
  (filtered as any).ref = () => {
    stdin.ref();
    return filtered;
  };
  (filtered as any).unref = () => {
    stdin.unref();
    return filtered;
  };

  // Enable mouse tracking
  process.stdout.write("\x1b[?1000h");
  process.stdout.write("\x1b[?1006h");

  stdin.setEncoding("utf8");
  stdin.resume(); // switch to flowing mode so 'data' events fire

  stdin.on("data", (chunk: Buffer | string) => {
    const str = typeof chunk === "string" ? chunk : chunk.toString();
    let match: RegExpExecArray | null;
    MOUSE_SGR_RE.lastIndex = 0;
    while ((match = MOUSE_SGR_RE.exec(str)) !== null) {
      const button = parseInt(match[1], 10);
      if (button === 64) mouseEvents.emit("scroll", "up");
      if (button === 65) mouseEvents.emit("scroll", "down");
    }

    // Strip mouse sequences before forwarding to Ink
    const clean = str.replace(MOUSE_SGR_RE, "");
    if (clean.length > 0) {
      filtered.write(clean);
    }
  });

  return filtered;
}

let cleanedUp = false;

export function cleanup(): void {
  if (cleanedUp) return;
  cleanedUp = true;
  try {
    // Disable mouse tracking
    process.stdout.write("\x1b[?1006l");
    process.stdout.write("\x1b[?1000l");
    // Clear screen and move cursor home
    process.stdout.write("\x1b[2J\x1b[H");
  } catch {
    // stdout may already be closed
  }
}
