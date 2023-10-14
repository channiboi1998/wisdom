import { FeelingEntrySkeleton } from "@/services/contentful";
import { EntryCollection } from "contentful";
import { create } from "zustand";

export type FeelingState = {
  feelings: EntryCollection<FeelingEntrySkeleton, undefined, string> | null;
  setFeelings: (
    payload: EntryCollection<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useFeelingStore = create<FeelingState>((set) => ({
  feelings: null,
  setFeelings: (payload) => set(() => ({ feelings: payload })),
}));
