import {
  FeelingEntrySkeleton,
  MessageEntrySkeleton,
  NeedEntrySkeleton,
} from "@/services/contentful";
import { Entry, EntrySkeletonType } from "contentful";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PersistState = {
  selectedFeeling: Entry<FeelingEntrySkeleton, undefined, string> | null;
  setSelectedFeeling: (
    payload: Entry<FeelingEntrySkeleton, undefined, string> | null
  ) => void;
  selectedNeed: Entry<NeedEntrySkeleton, undefined, string> | null;
  setSelectedNeed: (
    payload: Entry<NeedEntrySkeleton, undefined, string> | null
  ) => void;
  selectedMessage: Entry<MessageEntrySkeleton, undefined, string> | null;
  setSelectedMessage: (
    payload: Entry<MessageEntrySkeleton, undefined, string> | null
  ) => void;
  restart: () => void;
};

export const usePersistStore = create(
  persist<PersistState>(
    (set) => ({
      selectedFeeling: null,
      selectedNeed: null,
      setSelectedFeeling: (payload) =>
        set(() => ({
          selectedFeeling: payload,
          selectedNeed: null,
          selectedMessage: null,
        })),
      setSelectedNeed: (payload) =>
        set(() => ({ selectedNeed: payload, selectedMessage: null })),
      selectedMessage: null,
      setSelectedMessage: (payload) =>
        set(() => ({ selectedMessage: payload })),
      restart: () =>
        set(() => ({
          selectedFeeling: null,
          selectedNeed: null,
          selectedMessage: null,
        })),
    }),
    {
      name: "persist-storage", // name of the item in the storage (must be unique)
    }
  )
);
