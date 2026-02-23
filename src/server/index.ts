import localtunnel from "localtunnel";
import type { Tunnel } from "localtunnel";
import { GameServer, type GameServerOptions } from "./GameServer.js";
import { debug } from "../debug.js";

const servers = new Map<string, GameServer>();
const tunnels = new Map<string, Tunnel>();
const tunnelCallbacks = new Map<string, (status: { open: boolean; url?: string }) => void>();
const stoppedTunnels = new Set<string>();

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

async function openTunnel(gameId: string, port: number): Promise<Tunnel> {
  const subdomain = `lairs-${gameId.slice(0, 8)}`;
  debug("Opening tunnel for", gameId, "on port", port, "subdomain", subdomain);

  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Tunnel connection timed out after 30s")), 30000)
  );

  const tunnel = await Promise.race([
    localtunnel({ port, subdomain }),
    timeout,
  ]);

  tunnel.on("error", (err) => {
    debug("Tunnel error for", gameId, ":", err?.message);
  });

  tunnel.on("close", () => {
    debug("Tunnel closed for", gameId);
    tunnels.delete(gameId);
    const cb = tunnelCallbacks.get(gameId);
    cb?.({ open: false });

    // Auto-reconnect unless explicitly stopped
    if (!stoppedTunnels.has(gameId) && servers.has(gameId)) {
      debug("Auto-reconnecting tunnel for", gameId);
      const server = servers.get(gameId)!;
      setTimeout(() => {
        if (stoppedTunnels.has(gameId) || !servers.has(gameId)) return;
        openTunnel(gameId, server.getPort())
          .then((newTunnel) => {
            tunnels.set(gameId, newTunnel);
            const wsUrl = newTunnel.url.replace(/^http/, "ws");
            debug("Tunnel reconnected for", gameId, "at", wsUrl);
            cb?.({ open: true, url: wsUrl });
          })
          .catch((err) => {
            debug("Tunnel reconnect failed for", gameId, ":", err?.message);
          });
      }, 2000);
    }
  });

  return tunnel;
}

export type TunnelStatusCallback = (status: { open: boolean; url?: string }) => void;

export async function startTunnel(
  gameId: string,
  onStatusChange?: TunnelStatusCallback,
): Promise<string> {
  await stopTunnel(gameId);
  stoppedTunnels.delete(gameId);

  const server = servers.get(gameId);
  if (!server) throw new Error("No server running for game " + gameId);

  if (onStatusChange) {
    tunnelCallbacks.set(gameId, onStatusChange);
  }

  const port = server.getPort();
  const tunnel = await openTunnel(gameId, port);

  tunnels.set(gameId, tunnel);
  const wsUrl = tunnel.url.replace(/^http/, "ws");
  debug("Tunnel started for", gameId, "at", wsUrl);
  return wsUrl;
}

export function isTunnelOpen(gameId: string): boolean {
  return tunnels.has(gameId);
}

export async function stopTunnel(gameId: string): Promise<void> {
  stoppedTunnels.add(gameId);
  tunnelCallbacks.delete(gameId);
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
