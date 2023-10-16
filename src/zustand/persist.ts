import { FeelingEntrySkeleton, NeedEntrySkeleton } from "@/services/contentful";
import { Entry } from "contentful";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PersistState = {
  selectedFeeling: Entry<FeelingEntrySkeleton, undefined, string> | null;
  selectedNeed: Entry<NeedEntrySkeleton, undefined, string> | null;
  setSelectedFeeling: (
    payload: Entry<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
  setSelectedNeed: (
    payload: Entry<NeedEntrySkeleton, undefined, string> | null
  ) => void;
};

export const usePersistStore = create(
  persist<PersistState>(
    (set) => ({
      selectedFeeling: null,
      selectedNeed: null,
      setSelectedFeeling: (payload) =>
        set(() => ({ selectedFeeling: payload })),
      setSelectedNeed: (payload) => set(() => ({ selectedNeed: payload })),
    }),
    {
      name: "persist-storage", // name of the item in the storage (must be unique)
    }
  )
);
