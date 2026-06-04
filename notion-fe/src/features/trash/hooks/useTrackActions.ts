import { useHardDeletePage, useRestorePage } from "@/features/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function useTrashActions() {
  const router = useRouter();

  const { restore } = useRestorePage();
  const { hardDelete } = useHardDeletePage();

  const [busyPageId, setBusyPageId] = useState<string | null>(null);

  const restorePage = async (pageId: string, workspaceId: string) => {
    setBusyPageId(pageId);

    try {
      const result = await restore(pageId, workspaceId);

      toast.success("Đã khôi phục trang");

      if (result.data?.id) {
        router.push(`/pages/${result.data.id}`);
      }
    } finally {
      setBusyPageId(null);
    }
  };

  const deletePage = async (pageId: string, workspaceId: string) => {
    setBusyPageId(pageId);

    try {
      await hardDelete(pageId, workspaceId);

      toast.success("Đã xóa vĩnh viễn trang");
    } finally {
      setBusyPageId(null);
    }
  };

  return {
    busyPageId,
    restorePage,
    deletePage,
  };
}
