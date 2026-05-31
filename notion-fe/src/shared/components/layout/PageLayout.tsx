"use client";

import type { Page } from "@/features/page/types";
import { useUpdatePage } from "@/features/page/hooks";
import { cn } from "@/shared/lib/utils";
import { Image as ImageIcon, Users, UserX } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Editor } from "./Editor/EditorWrapper";
import CollaborativeEditor from "./Editor/CollaborativeEditor";

interface PageLayoutProps {
  page: Page;
}

export function PageLayout({ page }: PageLayoutProps) {
  const [titleValue, setTitleValue] = useState(page.title || "");
  const [imageUrl, setImageUrl] = useState<string | null>(
    page.coverUrl || null,
  );
  const [isCollabMode, setIsCollabMode] = useState(false);
  const { update } = useUpdatePage(page.id);
  const isInitialMount = useRef(true);
  const lastPersistedTitle = useRef(page.title || "");

  // Update local state when page changes
  useEffect(() => {
    setTitleValue(page.title || "");
    setImageUrl(page.coverUrl || null);
    lastPersistedTitle.current = page.title || "";
  }, [page.title, page.coverUrl]);

  // Debounced save for title
  const debouncedSaveTitle = useDebounceCallback(async (title: string) => {
    const normalizedTitle = title.trim();
    if (!normalizedTitle || normalizedTitle === lastPersistedTitle.current) {
      return;
    }

    try {
      await update({ title: normalizedTitle });
      lastPersistedTitle.current = normalizedTitle;
    } catch {
      // Keep local typing smooth and retry on next valid edit.
    }
  }, 500);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitleValue(newTitle);
    if (!isInitialMount.current) {
      debouncedSaveTitle(newTitle);
    }
  };

  // Mark initial mount as complete after first render
  useEffect(() => {
    isInitialMount.current = false;
    return () => {
      isInitialMount.current = true;
    };
  }, []);

  const handleRandomImage = async () => {
    const randomIndex = Math.floor(Math.random() * 3);
    setImageUrl(`/cover/${randomIndex}-cover.jpg`);
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden relative">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Ảnh nền trang"
          className="w-full object-cover"
          width={600}
          height={300}
        />
      )}
      <ScrollArea className="flex-1">
        <div className="max-w-5xl mx-auto pt-20">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              className="mb-4 flex items-center gap-2 cursor-pointer"
              onClick={handleRandomImage}
            >
              <ImageIcon />
              <p>Thêm ảnh bìa</p>
            </Button>
            <Button
              variant={isCollabMode ? "default" : "ghost"}
              className="mb-4 flex items-center gap-2 cursor-pointer"
              onClick={() => setIsCollabMode((v) => !v)}
            >
              {isCollabMode ? <UserX className="h-4 w-4" /> : <Users className="h-4 w-4" />}
              <p>{isCollabMode ? "Thoát cộng tác" : "Cộng tác"}</p>
            </Button>
          </div>
          <Input
            className={cn(
              "h-16 text-4xl! shadow-none font-bold bg-transparent! border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
            onChange={handleTitleChange}
            value={titleValue}
            type="text"
            placeholder="Trang mới"
          />
          <div className="py-5">
            {isCollabMode ? (
              <CollaborativeEditor pageId={page.id} />
            ) : (
              <Editor pageId={page.id} />
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
