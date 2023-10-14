import { NeedEntrySkeleton } from "@/services/contentful";
import { EntryCollection } from "contentful";
import { create } from "zustand";

export type NeedState = {
  needs: EntryCollection<NeedEntrySkeleton, undefined, string> | null;
  setNeeds: (
    payload: EntryCollection<NeedEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useNeedStore = create<NeedState>((set) => ({
  needs: null,
  setNeeds: (payload) => {
    set(() => ({ needs: payload }));
  },
}));
