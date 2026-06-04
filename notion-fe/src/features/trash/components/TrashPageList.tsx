import { Page } from "@/features/page";
import { TrashPageCard } from "./TrashPageCard";

type Props = {
  pages: Page[];
  busyPageId: string | null;
  onRestore: (pageId: string) => void;
  onDelete: (pageId: string) => void;
};

export function TrashPageList({
  pages,
  busyPageId,
  onRestore,
  onDelete,
}: Props) {
  return (
    <div className="grid gap-4">
      {pages.map((page) => (
        <TrashPageCard
          key={page.id}
          page={page}
          busy={busyPageId === page.id}
          onRestore={() => onRestore(page.id)}
          onDelete={() => onDelete(page.id)}
        />
      ))}
    </div>
  );
}
