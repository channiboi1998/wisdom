import { create } from "zustand";

export enum Modal {
  DISCLAIMER = "disclaimer",
}

export type UIState = {
  modals: {
    disclaimer: {
      isOpen: boolean;
    };
  };
  setModalOpen: (modal: Modal, isOpen: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  modals: {
    disclaimer: {
      isOpen: true,
    },
  },
  setModalOpen: (modal, isOpen) => {
    switch (modal) {
      case Modal.DISCLAIMER:
        set({ modals: { disclaimer: { isOpen } } });
    }
  },
}));
