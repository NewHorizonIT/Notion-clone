import { create } from "zustand";
import { persist } from "zustand/middleware";

type PageState = {
  id: string;
  title: string;
};

type PageAction = {
  setPage: (page: PageState) => void;
  getPage: () => PageState;
};

const usePageStore = create<PageState & PageAction>()(
  persist(
    (set, get) => ({
      id: "",
      title: "",
      setPage: (page: PageState) => set(() => ({ ...page })),
      getPage: () => {
        const state = get();
        return { id: state.id, title: state.title };
      },
    }),
    {
      name: "page-storage",
    }
  )
);

export default usePageStore;
