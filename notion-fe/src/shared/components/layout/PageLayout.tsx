"use client";

import { IconName, IconPicker } from "@/components/ui/icon-picker";
import { cn } from "@/shared/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Editor } from "./Editor/EditorWrapper";

interface PageLayoutProps {
  content?: string;
}

export function PageLayout({ content }: PageLayoutProps) {
  const [titleValue, setTitleValue] = useState("");
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [icon, setIcon] = useState<IconName | undefined>(undefined);

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
            <IconPicker
              value={icon}
              onValueChange={(icon) => setIcon(icon)}
              className="mb-4 flex items-center gap-2 cursor-pointer"
            />
          </div>
          <Input
            className={cn(
              "h-16 text-4xl! shadow-none font-bold bg-transparent! border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            )}
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue}
            type="text"
            placeholder="New Page"
          />
          <div className="py-5">
            <Editor />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
