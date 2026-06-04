import { Trash2 } from "lucide-react";

export function TrashPageEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <Trash2 className="mb-4 size-12 text-muted-foreground" />

      <h2 className="text-xl font-semibold">Trash is empty</h2>

      <p className="mt-2 text-muted-foreground">
        Deleted pages will appear here.
      </p>
    </div>
  );
}
