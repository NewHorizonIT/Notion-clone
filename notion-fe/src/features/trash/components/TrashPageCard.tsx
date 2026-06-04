"use client"
import { Page } from "@/features/page";
import { Button } from "@/shared/components/ui/button";

type Props = {
  page: Page;
  busy: boolean;
  onRestore: () => void;
  onDelete: () => void;
};

export function TrashPageCard({ page, busy, onRestore, onDelete }: Props) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="flex justify-between gap-4">
        <div>
          <h2>{page.title}</h2>

          <p>{page.description}</p>
        </div>

        <div className="flex gap-2">
          <Button onClick={onRestore} disabled={busy}>
            Restore
          </Button>

          <Button variant="destructive" onClick={onDelete} disabled={busy}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
