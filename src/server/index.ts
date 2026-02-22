import { GameServer, type GameServerOptions } from "./GameServer.js";
import { debug } from "../debug.js";

const servers = new Map<string, GameServer>();

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

export async function stopAllServers(): Promise<void> {
  const promises = Array.from(servers.entries()).map(async ([id, server]) => {
    await server.stop();
    debug("Stopped game server for", id);
  });
  await Promise.all(promises);
  servers.clear();
}
