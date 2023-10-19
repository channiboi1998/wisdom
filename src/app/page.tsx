"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import SelectFeeling from "./select-feeling";
import SelectNeed from "./select-need";
import ConfirmSelection from "./confirm-selection";
import Result from "./result";
import Complete from "./complete";
import { useFeelingStore } from "@/zustand/feeling";
import { useNeedStore } from "@/zustand/need";
import { useEffect } from "react";
import useContentful from "@/services/contentful";
import { useMessageStore } from "@/zustand/message";

export default function Page() {
  const { fetchMessages } = useContentful();
  const { selectedFeeling } = useFeelingStore();
  const { selectedNeed } = useNeedStore();
  const { setRandomMessage } = useMessageStore();
  const { selectedScreen } = useScreenStore();

  useEffect(() => {
    if (selectedFeeling && selectedNeed) {
      console.log("message changed");
      fetchMessages({
        feelingId: selectedFeeling.sys.id,
        needId: selectedNeed.sys.id,
      }).then((response) => {
        if (response && response.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.items.length);
          setRandomMessage(response.items[randomIndex]);
        } else {
          setRandomMessage(null);
        }
      });
    } else {
      console.log("nothing changed");
    }
  }, [selectedFeeling, selectedNeed]);

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
