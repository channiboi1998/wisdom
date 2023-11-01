import { FeelingEntrySkeleton } from "@/services/contentful";
import { AssetFile, Entry, EntryCollection } from "contentful";
import { create } from "zustand";

export type Feeling = {
  label: string;
  id: string;
  image: FeelingImage | null;
};
export type FeelingImage = {
  url: string | AssetFile | undefined;
  title:
    | string
    | {
        [x: string]: string | undefined;
      }
    | undefined;
  id: string;
};

export type FeelingState = {
  selectedFeeling: Feeling | null;
  setSelectedFeeling: (payload: Feeling | null) => void;
  feelings: Feeling[] | null;
  setFeelings: (payload: Feeling[] | null) => void;
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
