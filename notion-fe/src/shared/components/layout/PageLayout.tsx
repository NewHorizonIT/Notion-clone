"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";

export function PageLayout() {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [content, setContent] = useState(
    "<h1>Welcome to NotionX</h1><p>Start writing your thoughts here...</p>"
  );

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    // Auto-save simulation
    toast.success("Changes saved", { duration: 1000 });
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Main Content Area */}
      <ScrollArea className="flex-1">
        <div className="max-w-5xl mx-auto">{/* TipTap Editor */}</div>
      </ScrollArea>

      {/* Right Sidebar - Desktop Only */}
      <AnimatePresence>
        {showRightSidebar && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden xl:block border-l border-border overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-[280px] h-full"
            >
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Page Info</h3>
                    <Card className="p-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Edited 2 minutes ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>Shared with 3 people</span>
                      </div>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3">Comments</h3>
                    <Card className="p-3">
                      <p className="text-xs text-muted-foreground text-center py-4">
                        No comments yet
                      </p>
                    </Card>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
