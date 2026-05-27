"use client";

import { useEffect, useMemo, useState } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import useAuthStore from "@/shared/store/useAuthStore";

const WS_URL =
  process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:4000";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? "";

export interface CollabProvider {
  ydoc: Y.Doc;
  provider: WebsocketProvider;
  synced: boolean;
}

/**
 * Creates and manages a y-websocket WebsocketProvider for the given pageId.
 * Returns null until the token is available and the provider is instantiated.
 */
export function useCollabProvider(pageId: string): CollabProvider | null {
  const token = useAuthStore((s) => s.token);
  const ydoc = useMemo(() => new Y.Doc(), [pageId]);
  const [state, setState] = useState<CollabProvider | null>(null);

  useEffect(() => {
    if (!token || !pageId) return;

    const provider = new WebsocketProvider(WS_URL, pageId, ydoc, {
      params: { token, apiKey: API_KEY },
      // Reconnect automatically on drop
      WebSocketPolyfill: undefined,
    });

    const handleSync = (isSynced: boolean) => {
      if (isSynced) {
        setState({ ydoc, provider, synced: true });
      }
    };

    provider.on("sync", handleSync);

    // Surface the provider immediately (before sync) so the editor mounts
    setState({ ydoc, provider, synced: false });

    return () => {
      provider.off("sync", handleSync);
      provider.destroy();
      setState(null);
    };
  }, [pageId, token, ydoc]);

  return state;
}
