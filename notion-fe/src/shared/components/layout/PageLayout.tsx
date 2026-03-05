"use client";

import { Page, useUpdatePage } from "@/features/page";
import { cn } from "@/shared/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Editor } from "./Editor/EditorWrapper";

interface PageLayoutProps {
  page: Page;
}

export function PageLayout({ page }: PageLayoutProps) {
  const [titleValue, setTitleValue] = useState(page.title || "");
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(
    page.coverUrl || null,
  );
  const { trigger: updatePage } = useUpdatePage(page.id);
  const isInitialMount = useRef(true);

  // Update local state when page changes
  useEffect(() => {
    setTitleValue(page.title || "");
    setImageUrl(page.coverUrl || null);
  }, [page.title, page.coverUrl]);

  // Debounced save for title
  const debouncedSaveTitle = useDebounceCallback(async (title: string) => {
    try {
      await updatePage({ title });
    } catch (error) {
      console.error("Failed to save title:", error);
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
          alt="Page Background"
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
              <p>Add cover </p>
            </Button>
          </div>
          <Input
            className={cn(
              "h-16 text-4xl! shadow-none font-bold bg-transparent! border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
            onChange={handleTitleChange}
            value={titleValue}
            type="text"
            placeholder="New Page"
          />
          <div className="py-5">
            <Editor pageId={page.id} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
