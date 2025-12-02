"use client";
import {
  useCreateWorkspace,
  useGetListWorkspace,
} from "@/features/workspace/hooks";
import { useModalStore } from "@/shared/store/useModalStore";
import useWorkspaceStore from "@/shared/store/useWorkspaceStore";
import { SelectArrow } from "@radix-ui/react-select";
import { Plus, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
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
import PageItem, { Page } from "./PageItem";

export const initialPages: Page[] = [
  {
    id: "1",
    title: "Getting Started",
    children: [
      { id: "1-1", title: "Welcome" },
      {
        id: "1-2",
        title: "Quick Start",
        children: [
          { id: "1-2-1", title: "Installation" },
          {
            id: "1-2-2",
            title: "Usage",
            children: [
              { id: "1-2-2-1", title: "Basic Features" },
              { id: "1-2-2-2", title: "Advanced Features" },
            ],
          },
        ],
      },
    ],
  },
  { id: "2", title: "Project Ideas" },
  { id: "3", title: "Meeting Notes" },
  {
    id: "4",
    title: "Resources",
    children: [
      { id: "4-1", title: "Documentation" },
      { id: "4-2", title: "Tutorials" },
    ],
  },
];

export default function SidebarContent({
  setIsMobileOpen,
}: {
  setIsMobileOpen?: (open: boolean) => void;
}) {
  const [pages, setPages] = useState<Page[]>(initialPages);
  // Handle create workspace
  const { workspace, isError, mutateWorkspace } = useCreateWorkspace();
  // Handle Open modal
  const { openModal, closeModal } = useModalStore();
  // Fetch data workspace and set into useWorkspaceStore
  const { setWorkspace, workspaces } = useWorkspaceStore();
  const {
    workspaces: data,
    isLoading,
    isError: errorGetListWorkspace,
  } = useGetListWorkspace();
  useEffect(() => {
    if (data) setWorkspace(data);
  }, [data, setWorkspace]);

  return (
    <div className="flex h-screen flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold">NotionX</h1>
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
        <Select>
          <SelectTrigger className="w-full">
            <Button variant="ghost" asChild>
              <span className="text-sm">My Workspace</span>
            </Button>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Workspace</SelectLabel>
                {workspaces.map((w) => (
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
                  onClick={() => openModal("create-workspace")}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Workspace
                </Button>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>

      <ScrollArea className="flex-1 min-h-0 px-2 py-2">
        <div className="flex flex-col gap-0.5">
          {pages.map((page) => (
            <PageItem key={page.id} page={page} />
          ))}
        </div>
        <ScrollBar orientation={"vertical"} />
      </ScrollArea>

      <div className="p-3 border-t border-sidebar-border space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 hover:bg-sidebar-accent"
        >
          <Plus className="h-4 w-4" />
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
