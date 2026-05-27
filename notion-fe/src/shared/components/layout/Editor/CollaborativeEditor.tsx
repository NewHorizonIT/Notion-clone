"use client";

import "@/app/globals.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import "@blocknote/shadcn/style.css";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

import useAuthStore from "@/shared/store/useAuthStore";
import { useCollabProvider } from "@/features/collab/useCollabProvider";

const USER_COLORS = [
  "#f87171",
  "#34d399",
  "#60a5fa",
  "#a78bfa",
  "#fbbf24",
  "#f472b6",
];

function pickColor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return USER_COLORS[Math.abs(hash) % USER_COLORS.length];
}

// Inner editor — only rendered once provider is ready
function CollabEditorInner({
  ydoc,
  provider,
}: {
  ydoc: Y.Doc;
  provider: WebsocketProvider;
}) {
  const resolvedTheme = useTheme().resolvedTheme;
  const user = useAuthStore((s) => s.user);
  const name = user?.username ?? "Anonymous";
  const color = useMemo(() => pickColor(user?.id ?? name), [user?.id, name]);

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: ydoc.getXmlFragment("document-store"),
      user: { name, color },
    },
  });

  return (
    <div className="w-full max-w-3/4">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        className="min-h-[50vh] h-max"
      />
    </div>
  );
}

interface CollaborativeEditorProps {
  pageId: string;
}

export default function CollaborativeEditor({
  pageId,
}: CollaborativeEditorProps) {
  const collab = useCollabProvider(pageId);

  if (!collab) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center text-muted-foreground text-sm">
        Đang kết nối tới phòng cộng tác…
      </div>
    );
  }

  return <CollabEditorInner ydoc={collab.ydoc} provider={collab.provider} />;
}
