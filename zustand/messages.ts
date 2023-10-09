import { create } from "zustand";
import { Feeling, Need, Screen } from "../helpers/enums";

export type MessageState = {
  feeling: Feeling | null;
  need: Need | null;
  currentScreen: Screen;
  setFeeling: (feeling: Feeling | null) => void;
  setNeed: (need: Need | null) => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  feeling: null,
  need: null,
  currentScreen: Screen.ONE,
  setFeeling: (payload: Feeling | null) => set(() => ({ feeling: payload })),
  setNeed: (payload: Need | null) => set(() => ({ need: payload })),
}));
