import { NeedEntrySkeleton } from "@/services/contentful";
import { Entry, EntryCollection } from "contentful";
import { create } from "zustand";

export type NeedState = {
  selectedNeed: Entry<NeedEntrySkeleton, undefined, string> | null;
  setSelectedNeed: (
    payload: Entry<NeedEntrySkeleton, undefined, string> | null
  ) => void;
  needs: EntryCollection<NeedEntrySkeleton, undefined, string> | null;
  setNeeds: (
    payload: EntryCollection<NeedEntrySkeleton, undefined, string> | null
  ) => void;
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
