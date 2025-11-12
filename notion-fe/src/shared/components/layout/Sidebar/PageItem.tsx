import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, StickyNote } from "lucide-react";
import { useState } from "react";

export interface Page {
  id: string;
  title: string;
  icon?: string;
  children?: Page[];
}

export default function PageItem({
  page,
  depth = 0,
}: {
  page: Page;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!expanded);
  return (
    <div key={page.id}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Render list page of head */}
        <div
          className="group flex gap-4 items-center px-3 py-2 cursor-pointer hover:bg-background/50"
          style={{ paddingLeft: depth * 16 + 12 }}
        >
          <div className="w-6 h-6 p-2 rounded-sm flex items-center justify-center hover:bg-foreground/10">
            <span className="block group-hover:hidden">
              {page.icon || <StickyNote size={16} />}
            </span>
            <span className="hidden group-hover:block" onClick={handleExpand}>
              <motion.div
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={18} />
              </motion.div>
            </span>
          </div>
          <span>{page.title}</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Render child pages here */}
            {page.children ? (
              page.children.map((child) => (
                <PageItem key={child.id} page={child} depth={depth + 1} />
              ))
            ) : (
              <p
                className="pl-8 py-2 text-sm text-muted-foreground"
                style={{ paddingLeft: depth * 16 + 12 }}
              >
                No sub-pages
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
