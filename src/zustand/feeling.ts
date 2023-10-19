import { FeelingEntrySkeleton } from "@/services/contentful";
import { Entry, EntryCollection } from "contentful";
import { create } from "zustand";

export type FeelingState = {
  selectedFeeling: Entry<FeelingEntrySkeleton, undefined, string> | null;
  setSelectedFeeling: (
    payload: Entry<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
  feelings: EntryCollection<FeelingEntrySkeleton, undefined, string> | null;
  setFeelings: (
    payload: EntryCollection<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useFeelingStore = create<FeelingState>((set) => ({
  selectedFeeling: null,
  setSelectedFeeling: (payload) =>
    set(() => ({
      selectedFeeling: payload,
      selectedNeed: null,
      selectedMessage: null,
    })),
  feelings: null,
  setFeelings: (payload) => set(() => ({ feelings: payload })),
}));
