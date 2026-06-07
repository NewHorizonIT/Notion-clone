"use client";
import { useCreatePage, useGetPagesByWorkspace } from "@/features/page/hooks";
import { Workspace } from "@/features/workspace/types";
import { useGetListWorkspace } from "@/features/workspace/hooks";
import { useModalStore } from "@/shared/store/useModalStore";
import useWorkspaceStore from "@/shared/store/useWorkspaceStore";
import { SelectArrow } from "@radix-ui/react-select";
import { Loader2, Plus, Settings, Trash, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";
import { Button } from "../../ui/button";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../../ui/select";
import PageItem from "./PageItem";

export default function SidebarContent({
  setIsMobileOpen,
}: {
  setIsMobileOpen?: (open: boolean) => void;
}) {
  const router = useRouter();
  // Handle open modal
  const { openModal } = useModalStore();
  // Fetch data workspace and set into useWorkspaceStore
  const workspaces = useWorkspaceStore((state) => state.workspaces);
  const hasHydrated = useWorkspaceStore((state) => state.hasHydrated);
  const currentWorkspace = useWorkspaceStore((state) => state.currentWorkspace);
  const setWorkspace = useWorkspaceStore((state) => state.setWorkspace);
  const setCurrentWorkspace = useWorkspaceStore(
    (state) => state.setCurrentWorkspace,
  );
  const {
    workspaces: data,
    isLoading: isLoadingWorkspaces,
    isError: hasWorkspaceError,
    refetch: refetchWorkspaces,
  } = useGetListWorkspace();

  const workspaceOptions = useMemo(() => workspaces, [workspaces]);

  // Fetch pages for current workspace
  const {
    pages,
    isLoading: isLoadingPages,
    refetch: refreshPages,
  } = useGetPagesByWorkspace(currentWorkspace?.id || "");

  // Create page
  const { create, isLoading: isCreatingPage } = useCreatePage();

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    if (data) {
      const isSameWorkspaceList =
        data.length === workspaces.length &&
        data.every((workspace, index) => {
          const current = workspaces[index];
          return current && current.id === workspace.id;
        });

      if (!isSameWorkspaceList) {
        setWorkspace(data);
      }
    }
  }, [data, hasHydrated, setWorkspace, workspaces]);

  useEffect(() => {
    if (!hasHydrated || isLoadingWorkspaces) {
      return;
    }

    if (hasWorkspaceError) {
      toast.error("Không thể tải danh sách workspace");
    }
  }, [hasHydrated, isLoadingWorkspaces, hasWorkspaceError]);

  const handleWorkspaceCreated = (workspace: Workspace) => {
    setCurrentWorkspace({ id: workspace.id, name: workspace.name });
  };

  const handleWorkspaceUpdated = (workspace: Workspace) => {
    setCurrentWorkspace({ id: workspace.id, name: workspace.name });
  };

  const handleCreatePage = async () => {
    if (!currentWorkspace) {
      toast.error("Vui lòng chọn workspace trước");
      return;
    }
    try {
      const result = await create({ workspaceId: currentWorkspace.id });
      refreshPages();
      toast.success("Tạo trang thành công");
      if (result.data?.id) {
        router.push(`/pages/${result.data.id}`);
      }
    } catch {
      toast.error("Tạo trang thất bại");
    }
  };

  const handleWorkspaceChange = (workspaceId: string) => {
    const workspace = workspaces.find((w) => w.id === workspaceId);
    if (workspace) {
      setCurrentWorkspace(workspace);
    }
  };

  const handleOpenCreateWorkspace = () => {
    openModal("create-workspace", {
      onSuccess: handleWorkspaceCreated,
    });
  };

  const handleOpenEditWorkspace = () => {
    if (!currentWorkspace) {
      toast.error("Vui lòng chọn workspace trước");
      return;
    }

    openModal("edit-workspace", {
      workspaceId: currentWorkspace.id,
      initialName: currentWorkspace.name,
      onSuccess: handleWorkspaceUpdated,
    });
  };

  const handleOpenDeleteWorkspace = () => {
    if (!currentWorkspace) {
      toast.error("Vui lòng chọn workspace trước");
      return;
    }

    openModal("delete-workspace", {
      workspaceId: currentWorkspace.id,
      workspaceName: currentWorkspace.name,
      onSuccess: async () => {
        try {
          await refetchWorkspaces();
        } finally {
          setCurrentWorkspace(null);
        }
      },
    });
  };

  return (
    <div className="flex h-screen flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-center w-full">NotionX</h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8"
            onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {isLoadingWorkspaces ? (
          <div className="flex items-center justify-center py-2">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Select
            value={currentWorkspace?.id || ""}
            onValueChange={handleWorkspaceChange}
          >
            <SelectTrigger className="w-full">
              <span className="text-sm truncate">
                {currentWorkspace?.name || "Chọn workspace"}
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Danh sách workspace</SelectLabel>
                {workspaceOptions.map((w) => (
                  <SelectItem
                    value={w.id}
                    className="cursor-pointer"
                    key={w.id}
                  >
                    {w.name}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectArrow />
              <SelectGroup>
                <Button
                  className="w-full cursor-pointer"
                  variant="ghost"
                  size="sm"
                  onClick={handleOpenCreateWorkspace}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Thêm workspace
                </Button>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>

      <ScrollArea className="flex-1 min-h-0 px-2 py-2">
        <div className="flex flex-col gap-0.5">
          {isLoadingPages ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          ) : pages && pages.length > 0 ? (
            pages.map((page) => (
              <PageItem key={page.id} page={page} onDeleted={refreshPages} />
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              Chưa có trang nào
            </p>
          )}
        </div>
        <ScrollBar orientation={"vertical"} />
      </ScrollArea>

      <div className="p-3 border-t border-sidebar-border space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
          onClick={handleCreatePage}
          disabled={isCreatingPage || !currentWorkspace}
        >
          {isCreatingPage ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          <span className="text-sm">Trang mới</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
          onClick={handleOpenEditWorkspace}
          disabled={!currentWorkspace}
        >
          <Settings className="h-4 w-4" />
          <span className="text-sm">Cài đặt workspace</span>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
          onClick={handleOpenDeleteWorkspace}
          disabled={!currentWorkspace}
        >
          <Trash className="h-4 w-4" />
          <span className="text-sm">Xóa workspace</span>
        </Button>

        {/* Button redirect trash page */}
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
          onClick={() => {
            if (!currentWorkspace) {
              toast.error("Vui lòng chọn workspace trước");
              return;
            }
            router.push(`/pages/trash`);
          }}
          disabled={!currentWorkspace}
        >
          <Trash />
          <span className="text-sm">Thùng rác</span>
        </Button>
      </div>
    </div>
  );
}
