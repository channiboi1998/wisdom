import { create } from "zustand";

export type Message = {
  label: string;
  message: string;
};

export type MessageState = {
  randomMessage: Message | null;
  setRandomMessage: (payload: Message | null) => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  randomMessage: null,
  setRandomMessage: (payload) => set(() => ({ randomMessage: payload })),
}));
