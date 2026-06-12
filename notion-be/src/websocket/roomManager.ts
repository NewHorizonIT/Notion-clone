import * as Y from "yjs";
import WebSocket from "ws";
import logger from "../utils/logger";
import { loadDocState, saveDocState } from "./persistence";
import {
  MSG_SYNC,
  MSG_AWARENESS,
  SYNC_STEP1,
  SYNC_STEP2,
  SYNC_UPDATE,
  makeMessage,
  getMsgType,
  getSyncType,
  extractSyncPayload,
} from "./protocol";

export interface ClientMeta {
  userId: string;
  username: string;
}

interface Room {
  doc: Y.Doc;
  clients: Map<WebSocket, ClientMeta>;
}

const rooms = new Map<string, Room>();

// --- helpers ---

function send(ws: WebSocket, msg: Buffer): void {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(msg);
  }
}

function broadcast(room: Room, sender: WebSocket, msg: Buffer): void {
  for (const [client] of room.clients) {
    if (client !== sender) send(client, msg);
  }
}

async function getOrCreateRoom(pageId: string): Promise<Room> {
  const existing = rooms.get(pageId);
  if (existing) return existing;

  const doc = new Y.Doc();

  const saved = await loadDocState(pageId);
  if (saved && saved.length > 0) {
    Y.applyUpdate(doc, saved);
    logger.info(`[Collab] Restored Y.Doc for page ${pageId}`);
  }

  const room: Room = { doc, clients: new Map() };
  rooms.set(pageId, room);
  return room;
}

// --- public API ---

export async function joinRoom(
  pageId: string,
  ws: WebSocket,
  meta: ClientMeta,
): Promise<void> {
  const room = await getOrCreateRoom(pageId);
  room.clients.set(ws, meta);

  // Send the server's current state vector as sync step 1 so the client
  // knows what updates the server already has.
  const sv = Y.encodeStateVector(room.doc);
  send(ws, makeMessage(MSG_SYNC, SYNC_STEP1, sv));

  // Also push the full current state as sync step 2 so new clients that
  // join with an empty doc get all content immediately.
  const fullState = Y.encodeStateAsUpdate(room.doc);
  if (fullState.length > 0) {
    send(ws, makeMessage(MSG_SYNC, SYNC_STEP2, fullState));
  }

  logger.info(
    `[Collab] ${meta.username} joined room ${pageId} (${room.clients.size} online)`,
  );
}

export function handleMessage(
  pageId: string,
  ws: WebSocket,
  raw: Buffer,
): void {
  const room = rooms.get(pageId);
  if (!room) return;

  const msgType = getMsgType(raw);

  if (msgType === MSG_AWARENESS) {
    // Relay presence/cursor updates without touching the Y.Doc
    broadcast(room, ws, raw);
    return;
  }

  if (msgType === MSG_SYNC) {
    const syncType = getSyncType(raw);

    if (syncType === SYNC_STEP1) {
      // Client sent its state vector → reply with everything it's missing
      const clientSV = extractSyncPayload(raw);
      const diff = Y.encodeStateAsUpdate(room.doc, clientSV);
      send(ws, makeMessage(MSG_SYNC, SYNC_STEP2, diff));
      return;
    }

    if (syncType === SYNC_STEP2 || syncType === SYNC_UPDATE) {
      const update = extractSyncPayload(raw);
      try {
        Y.applyUpdate(room.doc, update);
      } catch (err) {
        logger.warn(`[Collab] Failed to apply update for page ${pageId}:`, err);
        return;
      }
      // Relay the original raw message so clients stay in sync
      broadcast(room, ws, raw);
      return;
    }
  }
}

export async function leaveRoom(pageId: string, ws: WebSocket): Promise<void> {
  const room = rooms.get(pageId);
  if (!room) return;

  const meta = room.clients.get(ws);
  room.clients.delete(ws);

  logger.info(
    `[Collab] ${meta?.username ?? "unknown"} left room ${pageId} (${room.clients.size} remaining)`,
  );

  if (room.clients.size === 0) {
    // Persist and evict when the last client leaves
    try {
      const state = Y.encodeStateAsUpdate(room.doc);
      await saveDocState(pageId, state);
    } catch (err) {
      logger.error(`[Collab] Failed to persist state for page ${pageId}:`, err);
    }
    room.doc.destroy();
    rooms.delete(pageId);
    logger.info(`[Collab] Room ${pageId} closed and state persisted`);
  }
}

export function getRoomCount(): number {
  return rooms.size;
}
