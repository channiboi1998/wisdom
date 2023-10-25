"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import SelectFeeling from "./select-feeling";
import SelectNeed from "./select-need";
import ConfirmSelection from "./confirm-selection";
import Result from "./result";
import Complete from "./complete";
import useGetRandomMessage from "@/hooks/use-get-random-message";

export default function Page() {
  useGetRandomMessage();
  const { selectedScreen } = useScreenStore();

  switch (selectedScreen) {
    case Screen.SELECT_FEELING:
      return <SelectFeeling />;
    case Screen.SELECT_NEED:
      return <SelectNeed />;
    case Screen.CONFIRM_SELECTION:
      return <ConfirmSelection />;
    case Screen.RESULT:
      return <Result />;
    case Screen.COMPLETE:
      return <Complete />;
    default:
      return null;
  }
}
