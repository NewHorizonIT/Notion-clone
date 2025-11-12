"use client";
import "@/app/globals.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

import { useTheme } from "next-themes";

export default function Editor() {
  const resolveTheme = useTheme().resolvedTheme;
  const editor = useCreateBlockNote();

  return (
    <div className="w-full max-w-3/4">
      <BlockNoteView
        editor={editor}
        onChange={() => {
          console.log(editor.document);
        }}
        theme={resolveTheme === "dark" ? "dark" : "light"}
        className="min-h-[50vh] h-max"
      />
    </div>
  );
}
