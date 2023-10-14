import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PersistState = {
  selectedFeeling: string | null;
  selectedNeed: string | null;
  setSelectedFeeling: (payload: string | null) => void;
  setSelectedNeed: (payload: string | null) => void;
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
