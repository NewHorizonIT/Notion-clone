"use client";
import { useGetTrashedPages } from "@/features/page";
import { TrashPageEmpty } from "@/features/trash/components/TrashPageEmpty";
import { TrashPageHeader } from "@/features/trash/components/TrashPageHeader";
import { TrashPageList } from "@/features/trash/components/TrashPageList";
import { TrashPageLoading } from "@/features/trash/components/TrashPageLoading";
import { useTrashActions } from "@/features/trash/hooks/useTrackActions";
import useWorkspaceStore from "@/shared/store/useWorkspaceStore";

export default function TrashPage() {
  const workspace = useWorkspaceStore((state) => state.currentWorkspace);

  const { trashedPages, isLoading, isError } = useGetTrashedPages(
    workspace?.id ?? null,
  );

  const { busyPageId, restorePage, deletePage } = useTrashActions();

  if (isLoading) return <TrashPageLoading />;

  if (!workspace) return <TrashPageEmpty />;

  if (isError)
    return <p className="text-center text-sm text-red-500">Đã có lỗi xảy ra</p>;

  return (
    <>
      <TrashPageHeader
        workspaceName={workspace.name}
        count={trashedPages.length}
      />

      {trashedPages.length === 0 ? (
        <TrashPageEmpty />
      ) : (
        <TrashPageList
          pages={trashedPages}
          busyPageId={busyPageId}
          onRestore={(pageId: string) => restorePage(pageId, workspace.id)}
          onDelete={(pageId: string) => deletePage(pageId, workspace.id)}
        />
      )}
    </>
  );
}
