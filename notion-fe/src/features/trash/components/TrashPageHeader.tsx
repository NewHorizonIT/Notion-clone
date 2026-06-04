import { Trash2 } from "lucide-react";

type Props = {
  workspaceName: string;
  count: number;
};

export function TrashPageHeader({ workspaceName, count }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <Trash2 className="size-8" />

        <div>
          <h1 className="text-3xl font-bold">Trash</h1>

          <p className="text-muted-foreground">
            {workspaceName} • {count} deleted pages
          </p>
        </div>
      </div>
    </div>
  );
}
