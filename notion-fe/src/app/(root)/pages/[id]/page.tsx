"use client";

import { useGetPageById } from "@/features/page";
import { PageLayout } from "@/shared/components/layout/PageLayout";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

export default function PageDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { page, isLoading, isError } = useGetPageById(id);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !page) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Page not found</p>
      </div>
    );
  }

  return <PageLayout page={page} />;
}
