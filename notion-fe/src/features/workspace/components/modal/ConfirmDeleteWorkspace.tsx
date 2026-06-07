"use client";

import { useDeleteWorkspace } from "../../hooks";
import { Workspace } from "../../types";
import { Button } from "@/shared/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import axios from "axios";
import { toast } from "sonner";

interface ConfirmDeleteWorkspaceProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  workspaceId?: string;
  workspaceName?: string;
  onSuccess?: (workspace: Workspace) => void;
}

export default function ConfirmDeleteWorkspace({
  isOpen,
  onOpenChange,
  workspaceId,
  workspaceName,
  onSuccess,
}: ConfirmDeleteWorkspaceProps) {
  const { remove, isLoading } = useDeleteWorkspace(workspaceId || "");

  const canDelete = Boolean(workspaceId);

  const handleDelete = async () => {
    if (!workspaceId) {
      toast.error("Thiếu workspace để xóa");
      return;
    }

    try {
      const result = await remove();
      onSuccess?.(result.data as Workspace);
      toast.success("Xóa workspace thành công");
      onOpenChange(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messageFromServer =
          (error.response?.data as { message?: string } | undefined)?.message ||
          "Xóa workspace thất bại";
        toast.error(messageFromServer);
        return;
      }

      toast.error("Xóa workspace thất bại");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[420px] rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận xóa workspace</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <span>
              Bạn có chắc muốn xóa workspace{" "}
              <span className="font-semibold text-foreground">
                {workspaceName}
              </span>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button type="button" variant="outline" disabled={isLoading}>
              Hủy
            </Button>
          </AlertDialogCancel>
          <Button
            type="button"
            variant="destructive"
            disabled={isLoading || !canDelete}
            onClick={handleDelete}
          >
            {isLoading ? "Đang xóa..." : "Xóa workspace"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
