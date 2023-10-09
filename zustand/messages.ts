import { create } from "zustand";
import { Feeling, Need, Screen } from "../helpers/enums";

export type MessageState = {
  feeling: Feeling | null;
  need: Need | null;
  currentScreen: Screen;
  setCurrentScreen: (payload: Screen) => void;
  setFeeling: (payload: Feeling | null) => void;
  setNeed: (payload: Need | null) => void;
  restart: () => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  feeling: null,
  need: null,
  currentScreen: Screen.ONE,
  setCurrentScreen: (payload: Screen) =>
    set(() => ({ currentScreen: payload })),
  setFeeling: (payload: Feeling | null) => set(() => ({ feeling: payload })),
  setNeed: (payload: Need | null) => set(() => ({ need: payload })),
  restart: () =>
    set(() => ({ feeling: null, need: null, currentScreen: Screen.ONE })),
}));
