import { NeedEntrySkeleton } from "@/services/contentful";
import { EntryCollection } from "contentful";
import { create } from "zustand";

export type NeedState = {
  selectedNeed: string | null;
  needs: EntryCollection<NeedEntrySkeleton, undefined, string> | null;
  setSelectedNeed: (payload: string | null) => void;
  setNeeds: (
    payload: EntryCollection<NeedEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useNeedStore = create<NeedState>((set) => ({
  selectedNeed: null,
  setSelectedNeed: (payload) => set({ selectedNeed: payload }),
  needs: null,
  setNeeds: (payload) => {
    set(() => ({ needs: payload }));
  },
}));
