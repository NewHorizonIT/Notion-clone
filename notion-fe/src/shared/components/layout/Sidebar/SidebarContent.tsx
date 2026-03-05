"use client";
import { useCreatePage, useGetPagesByWorkspace } from "@/features/page";
import {
  useCreateWorkspace,
  useGetListWorkspace,
} from "@/features/workspace/hooks";
import { useModalStore } from "@/shared/store/useModalStore";
import useWorkspaceStore from "@/shared/store/useWorkspaceStore";
import { SelectArrow } from "@radix-ui/react-select";
import { Loader2, Plus, Settings, X } from "lucide-react";
import { useEffect } from "react";
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
  // Handle create workspace
  const { workspace, isError, mutateWorkspace } = useCreateWorkspace();
  // Handle Open modal
  const { openModal, closeModal } = useModalStore();
  // Fetch data workspace and set into useWorkspaceStore
  const workspaces = useWorkspaceStore((state) => state.workspaces);
  const currentWorkspace = useWorkspaceStore((state) => state.currentWorkspace);
  const setWorkspace = useWorkspaceStore((state) => state.setWorkspace);
  const setCurrentWorkspace = useWorkspaceStore(
    (state) => state.setCurrentWorkspace,
  );
  const {
    workspaces: data,
    isLoading: isLoadingWorkspaces,
    isError: errorGetListWorkspace,
  } = useGetListWorkspace();

  // Fetch pages for current workspace
  const {
    pages,
    isLoading: isLoadingPages,
    refetch: refreshPages,
  } = useGetPagesByWorkspace(currentWorkspace?.id || "");

  // Create page
  const { createPage, isLoading: isCreatingPage } = useCreatePage();

  useEffect(() => {
    if (data) {
      setWorkspace(data);
      if (!currentWorkspace && data.length > 0) {
        setCurrentWorkspace(data[0]);
      }
    }
  }, [data, setWorkspace, currentWorkspace, setCurrentWorkspace]);

  const handleCreatePage = async () => {
    if (!currentWorkspace) {
      toast.error("Please select a workspace first");
      return;
    }
    try {
      await createPage({ workspaceId: currentWorkspace.id });
      refreshPages();
      toast.success("Page created");
    } catch (error) {
      toast.error("Failed to create page");
    }
  };

  const handleWorkspaceChange = (workspaceId: string) => {
    const workspace = workspaces.find((w) => w.id === workspaceId);
    if (workspace) {
      setCurrentWorkspace(workspace);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-center w-full">NotionX</h1>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8"
            onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Select
          value={currentWorkspace?.id || ""}
          onValueChange={handleWorkspaceChange}
        >
          <SelectTrigger className="w-full">
            <span className="text-sm truncate">
              {currentWorkspace?.name || "Select Workspace"}
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Workspace</SelectLabel>
              {workspaces.map((w) => (
                <SelectItem value={w.id} className="cursor-pointer" key={w.id}>
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
                onClick={() => openModal("create-workspace")}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Workspace
              </Button>
            </SelectGroup>
          </SelectContent>
        </Select>
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
              No pages yet
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
          <span className="text-sm">New Page</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
          onClick={() => toast.info("Settings coming soon")}
        >
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </Button>
      </div>
    </div>
  );
}
