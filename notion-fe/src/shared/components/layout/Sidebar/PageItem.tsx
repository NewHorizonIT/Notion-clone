"use client";
import { Page, useDeletePage } from "@/features/page";
import { motion } from "framer-motion";
import { MoreHorizontal, StickyNote, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

interface PageItemProps {
  page: Page;
  onDeleted?: () => void;
}

export default function PageItem({ page, onDeleted }: PageItemProps) {
  const pathname = usePathname();
  const isActive = pathname === `/pages/${page.id}`;
  const { deletePage, isLoading: isDeleting } = useDeletePage();

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await deletePage(page.id, page.workspaceId);
    onDeleted?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`group flex gap-2 items-center justify-between px-3 py-2 cursor-pointer hover:bg-background/50 rounded-md ${
          isActive ? "bg-background/70" : ""
        }`}
      >
        <div className="w-6 h-6 rounded-sm flex items-center justify-center">
          {page.icon ? (
            <span>{page.icon}</span>
          ) : (
            <StickyNote size={16} className="text-muted-foreground" />
          )}
        </div>
        <Link href={`/pages/${page.id}`} className="flex-1 truncate text-sm">
          {page.title || "Untitled"}
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreHorizontal size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-destructive focus:text-destructive cursor-pointer"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Move to Trash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
}
