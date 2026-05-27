import { Server as HttpServer, IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";
import { URL } from "url";
import { validateToken } from "../utils/jwt";
import config from "../config";
import logger from "../utils/logger";
import { joinRoom, handleMessage, leaveRoom } from "./roomManager";

interface ConnCtx {
  pageId: string;
  userId: string;
  username: string;
}

export function attachWebSocketServer(httpServer: HttpServer): void {
  const wss = new WebSocketServer({ noServer: true });

  // Auth happens at the HTTP upgrade level — before the WS handshake
  httpServer.on("upgrade", (req: IncomingMessage, socket, head) => {
    const abort = (code: number, msg: string) => {
      socket.write(`HTTP/1.1 ${code} ${msg}\r\n\r\n`);
      socket.destroy();
    };

    try {
      const url = new URL(req.url ?? "", `http://${req.headers.host}`);
      const token = url.searchParams.get("token");
      const apiKey = url.searchParams.get("apiKey");
      // Room name = first path segment (y-websocket convention: /<roomName>)
      const pageId = url.pathname.replace(/^\//, "").split("?")[0];

      if (!apiKey || apiKey !== config.api.key) {
        return abort(401, "Unauthorized: invalid api key");
      }

      if (!token) {
        return abort(401, "Unauthorized: missing token");
      }

      const payload = validateToken(token);
      if (!payload) {
        return abort(401, "Unauthorized: invalid token");
      }

      if (!pageId) {
        return abort(400, "Bad Request: missing pageId");
      }

      const ctx: ConnCtx = {
        pageId,
        userId: payload.userId,
        username: (payload.username as string) ?? payload.email,
      };

      wss.handleUpgrade(req, socket, head, (ws) => {
        // Stash ctx so the connection handler can retrieve it
        (ws as WebSocket & { _ctx?: ConnCtx })._ctx = ctx;
        wss.emit("connection", ws, req);
      });
    } catch (err) {
      logger.error("[WS] Upgrade error:", err);
      socket.destroy();
    }
  });

  wss.on("connection", (ws: WebSocket) => {
    const ctx = (ws as WebSocket & { _ctx?: ConnCtx })._ctx;
    if (!ctx) {
      ws.close(1008, "Missing context");
      return;
    }
    const { pageId, userId, username } = ctx;

    joinRoom(pageId, ws, { userId, username }).catch((err) => {
      logger.error("[WS] joinRoom failed:", err);
      ws.close(1011, "Internal error");
    });

    ws.on("message", (data: WebSocket.RawData) => {
      const buf = Buffer.isBuffer(data)
        ? data
        : Buffer.from(data as ArrayBuffer);
      handleMessage(pageId, ws, buf);
    });

    ws.on("close", () => {
      leaveRoom(pageId, ws).catch((err) => {
        logger.error("[WS] leaveRoom failed:", err);
      });
    });

    ws.on("error", (err) => {
      logger.error(`[WS] Socket error in room ${pageId}:`, err);
    });
  });

  logger.info("[WS] WebSocket server ready");
}
