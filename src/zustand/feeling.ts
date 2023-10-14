import { FeelingEntrySkeleton } from "@/services/contentful";
import { EntryCollection } from "contentful";
import { create } from "zustand";

export type FeelingState = {
  selectedFeeling: string | null;
  feelings: EntryCollection<FeelingEntrySkeleton, undefined, string> | null;
  setSelectedFeeling: (payload: string | null) => void;
  setFeelings: (
    payload: EntryCollection<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useFeelingStore = create<FeelingState>((set) => ({
  selectedFeeling: null,
  feelings: null,
  setSelectedFeeling: (payload) => set(() => ({ selectedFeeling: payload })),
  setFeelings: (payload) => set(() => ({ feelings: payload })),
}));
