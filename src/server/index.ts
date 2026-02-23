import localtunnel from "localtunnel";
import type { Tunnel } from "localtunnel";
import { GameServer, type GameServerOptions } from "./GameServer.js";
import { debug } from "../debug.js";

const servers = new Map<string, GameServer>();
const tunnels = new Map<string, Tunnel>();

export async function startGameServer(
  gameId: string,
  options: GameServerOptions
): Promise<{ port: number }> {
  // Stop existing server for this game if any
  await stopGameServer(gameId);

  const server = new GameServer(options);
  const port = await server.start();
  servers.set(gameId, server);
  debug("Started game server for", gameId, "on port", port);
  return { port };
}

export async function stopGameServer(gameId: string): Promise<void> {
  const server = servers.get(gameId);
  if (server) {
    await server.stop();
    servers.delete(gameId);
    debug("Stopped game server for", gameId);
  }
}

export async function startTunnel(gameId: string): Promise<string> {
  await stopTunnel(gameId);

  const server = servers.get(gameId);
  if (!server) throw new Error("No server running for game " + gameId);

  const port = server.getPort();
  debug("Starting tunnel for", gameId, "on port", port);

  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Tunnel connection timed out after 30s")), 30000)
  );

  const tunnel = await Promise.race([
    localtunnel({ port }),
    timeout,
  ]);

  tunnel.on("error", (err) => {
    debug("Tunnel error for", gameId, ":", err?.message);
  });

  tunnel.on("close", () => {
    debug("Tunnel closed for", gameId);
    tunnels.delete(gameId);
  });

  tunnels.set(gameId, tunnel);
  const wsUrl = tunnel.url.replace(/^http/, "ws");
  debug("Tunnel started for", gameId, "at", wsUrl);
  return wsUrl;
}

export async function stopTunnel(gameId: string): Promise<void> {
  const tunnel = tunnels.get(gameId);
  if (tunnel) {
    tunnel.close();
    tunnels.delete(gameId);
    debug("Tunnel stopped for", gameId);
  }
}

export async function stopAllServers(): Promise<void> {
  const tunnelPromises = Array.from(tunnels.entries()).map(async ([id]) => {
    await stopTunnel(id);
  });
  await Promise.all(tunnelPromises);

  const promises = Array.from(servers.entries()).map(async ([id, server]) => {
    await server.stop();
    debug("Stopped game server for", id);
  });
  await Promise.all(promises);
  servers.clear();
}
