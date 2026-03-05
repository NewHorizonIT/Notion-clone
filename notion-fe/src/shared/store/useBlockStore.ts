import { create } from "zustand";
import { Block } from "@/features/block/types";

type BlockState = {
  blocks: Block[];
  isLoading: boolean;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
};

type BlockAction = {
  setBlocks: (blocks: Block[]) => void;
  addBlock: (block: Block) => void;
  updateBlock: (blockId: string, updates: Partial<Block>) => void;
  removeBlock: (blockId: string) => void;
  setIsLoading: (loading: boolean) => void;
  setIsSaving: (saving: boolean) => void;
  setHasUnsavedChanges: (hasChanges: boolean) => void;
  clearBlocks: () => void;
};

const useBlockStore = create<BlockState & BlockAction>((set, get) => ({
  blocks: [],
  isLoading: false,
  isSaving: false,
  hasUnsavedChanges: false,

  setBlocks: (blocks: Block[]) =>
    set({ blocks, isLoading: false, hasUnsavedChanges: false }),

  addBlock: (block: Block) => {
    const blocks = get().blocks;
    set({
      blocks: [...blocks, block],
      hasUnsavedChanges: true,
    });
  },

  updateBlock: (blockId: string, updates: Partial<Block>) => {
    const blocks = get().blocks.map((block) =>
      block.id === blockId ? { ...block, ...updates } : block,
    );
    set({ blocks, hasUnsavedChanges: true });
  },

  removeBlock: (blockId: string) => {
    const blocks = get().blocks.filter((block) => block.id !== blockId);
    set({ blocks, hasUnsavedChanges: true });
  },

  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  setIsSaving: (saving: boolean) => set({ isSaving: saving }),
  setHasUnsavedChanges: (hasChanges: boolean) =>
    set({ hasUnsavedChanges: hasChanges }),

  clearBlocks: () =>
    set({
      blocks: [],
      isLoading: false,
      isSaving: false,
      hasUnsavedChanges: false,
    }),
}));

export default useBlockStore;
