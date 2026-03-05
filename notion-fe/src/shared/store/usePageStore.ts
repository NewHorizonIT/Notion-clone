import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Page } from "@/features/page/types";

type PageState = {
  currentPage: Page | null;
  recentPages: Page[];
};

type PageAction = {
  setCurrentPage: (page: Page | null) => void;
  addToRecent: (page: Page) => void;
  clearRecent: () => void;
};

const MAX_RECENT_PAGES = 10;

const usePageStore = create<PageState & PageAction>()(
  persist(
    (set, get) => ({
      currentPage: null,
      recentPages: [],
      setCurrentPage: (page: Page | null) => {
        set({ currentPage: page });
        if (page) {
          // Add to recent pages
          const recent = get().recentPages;
          const filtered = recent.filter((p) => p.id !== page.id);
          set({ recentPages: [page, ...filtered].slice(0, MAX_RECENT_PAGES) });
        }
      },
      addToRecent: (page: Page) => {
        const recent = get().recentPages;
        const filtered = recent.filter((p) => p.id !== page.id);
        set({ recentPages: [page, ...filtered].slice(0, MAX_RECENT_PAGES) });
      },
      clearRecent: () => set({ recentPages: [] }),
    }),
    {
      name: "page-storage",
      partialize: (state) => ({
        recentPages: state.recentPages,
      }),
    },
  ),
);

export default usePageStore;
