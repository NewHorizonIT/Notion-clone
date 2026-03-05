"use client";
import dynamic from "next/dynamic";

interface EditorProps {
  pageId: string;
}

const EditorComponent = dynamic(() => import("./Editor"), { ssr: false });

export function Editor({ pageId }: EditorProps) {
  return <EditorComponent pageId={pageId} />;
}
