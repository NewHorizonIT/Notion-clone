
import { Skeleton } from "@/shared/components/ui/skeleton";

export function TrashPageLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="rounded-xl border p-4">
          <Skeleton className="h-5 w-48" />

          <Skeleton className="mt-2 h-4 w-full" />

          <Skeleton className="mt-4 h-8 w-32" />
        </div>
      ))}
    </div>
  );
}
