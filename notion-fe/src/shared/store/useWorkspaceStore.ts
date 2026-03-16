import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WorkspaceData {
  id: string;
  name: string;
}

type WorkspaceAction = {
  setHasHydrated: (status: boolean) => void;
  setWorkspace: (data: WorkspaceData[]) => void;
  updateWorkspace: (data: WorkspaceData) => void;
  deleteWorkspace: (data: WorkspaceData) => void;
  addWorkspace: (data: WorkspaceData) => void;
  setCurrentWorkspace: (data: WorkspaceData | null) => void;
};

type WorkspaceState = {
  hasHydrated: boolean;
  workspaces: WorkspaceData[];
  currentWorkspace: WorkspaceData | null;
};

const useWorkspaceStore = create<WorkspaceState & WorkspaceAction>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      workspaces: [],
      currentWorkspace: null,
      setHasHydrated: (status: boolean) => set({ hasHydrated: status }),

      setWorkspace: (data: WorkspaceData[]) => {
        const current = get().currentWorkspace;
        const nextCurrent = current
          ? data.find((workspace) => workspace.id === current.id) || null
          : data[0] || null;

        set({
          workspaces: data,
          currentWorkspace: nextCurrent,
        });
      },

      addWorkspace: (data: WorkspaceData) =>
        set({ workspaces: [...get().workspaces, data] }),

      deleteWorkspace: (data: WorkspaceData) => {
        const updatedWorkspaces = get().workspaces.filter(
          (workspace) => workspace.id !== data.id,
        );
        const current = get().currentWorkspace;
        set({
          workspaces: updatedWorkspaces,
          currentWorkspace: current?.id === data.id ? null : current,
        });
      },

      updateWorkspace: (data: WorkspaceData) => {
        const updatedWorkspaces = get().workspaces.map((w) =>
          w.id === data.id ? data : w,
        );
        const current = get().currentWorkspace;
        set({
          workspaces: updatedWorkspaces,
          currentWorkspace: current?.id === data.id ? data : current,
        });
      },

      setCurrentWorkspace: (data: WorkspaceData | null) =>
        set({ currentWorkspace: data }),
    }),
    {
      name: "workspace-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      partialize: (state) => ({
        currentWorkspace: state.currentWorkspace,
      }),
    },
  ),
);

export default useWorkspaceStore;
