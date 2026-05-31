import { create } from "zustand";

interface ModalState {
  modalType: string | null;
  modalProps?: unknown;
  openModal: (type: string, props?: unknown) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  modalProps: {},
  openModal: (type, props) => set({ modalType: type, modalProps: props }),
  closeModal: () => set({ modalType: null, modalProps: {} }),
}));
