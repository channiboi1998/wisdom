import { MessageEntrySkeleton } from "@/services/contentful";
import { Entry } from "contentful";
import { create } from "zustand";

export type MessageState = {
  randomMessage: Entry<MessageEntrySkeleton, undefined, string> | null;
  setRandomMessage: (
    payload: Entry<MessageEntrySkeleton, undefined, string> | null
  ) => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  randomMessage: null,
  setRandomMessage: (payload) => set(() => ({ randomMessage: payload })),
}));
