"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import SelectFeeling from "./select-feeling";
import SelectNeed from "./select-need";
import ConfirmSelection from "./confirm-selection";

export default function Page() {
  const { selectedScreen } = useScreenStore();

  switch (selectedScreen) {
    case Screen.SELECT_FEELING:
      return <SelectFeeling />;
    case Screen.SELECT_NEED:
      return <SelectNeed />;
    case Screen.CONFIRM_SELECTION:
      return <ConfirmSelection />;
    default:
      return null;
  }
}
