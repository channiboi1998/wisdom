import { create } from "zustand";

export type Need = {
  id: string;
  label: string;
  description: string;
};

export type NeedState = {
  selectedNeed: Need | null;
  setSelectedNeed: (payload: Need | null) => void;
  needs: Need[] | null;
  setNeeds: (payload: Need[] | null) => void;
};

export const useNeedStore = create<NeedState>((set) => ({
  selectedNeed: null,
  setSelectedNeed: (payload) =>
    set(() => ({ selectedNeed: payload, selectedMessage: null })),
  needs: null,
  setNeeds: (payload) => {
    set(() => ({ needs: payload }));
  },
}));
