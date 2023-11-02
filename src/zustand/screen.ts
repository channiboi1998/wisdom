import { create } from "zustand";

export enum Screen {
  SELECT_FEELING = "select-feeling",
  SELECT_NEED = "select-need",
  CONFIRM_SELECTION = "confirm-selection",
  RESULT = "result",
  COMPLETE = "complete",
}

export type ScreenState = {
  selectedScreen: Screen | null;
  setSelectedScreen: (payload: Screen) => void;
};

export const useScreenStore = create<ScreenState>((set) => ({
  selectedScreen: null,
  setSelectedScreen: (payload) => set({ selectedScreen: payload }),
}));
