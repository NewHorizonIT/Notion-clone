import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import { cn } from "@/shared/lib/utils";
import { ChevronRight, Trash2 } from "lucide-react";
import { useState } from "react";

export interface Page {
  id: string;
  title: string;
  icon: string;
  children?: Page[];
}

export default function PageItem(page: Page, depth = 0) {
  const [expandedPages, setExpandedPages] = useState<Set<string>>(
    new Set(["1", "4"])
  );
  const hasChildren = page.children && page.children.length > 0;
  const isExpanded = expandedPages.has(page.id);
  return (
    <div key={page.id}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal hover:bg-sidebar-accent group",
            depth > 0 && "ml-4"
          )}
        >
          {hasChildren && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            </motion.div>
          )}
          {!hasChildren && <div className="w-3" />}
          <span className="text-base">{page.icon}</span>
          <span className="flex-1 text-left text-sm truncate">
            {page.title}
          </span>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <Trash2 className="h-2 w-2" />
          </Button>
        </Button>
      </motion.div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {page.children?.map((child) => PageItem(child, depth + 1))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
