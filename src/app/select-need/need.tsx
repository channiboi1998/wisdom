"use client";

import { Need, useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import React from "react";

type Props = {
  need: Need;
};

const Need = ({ need }: Props) => {
  const { setSelectedScreen } = useScreenStore();
  const { selectedNeed, setSelectedNeed } = useNeedStore();

  const isActive = (selectedNeed: Need | null, need: Need) => {
    return selectedNeed?.label === need.label;
  };

  return (
    <button
      className={`rounded-3xl p-10 md:w-96 hover:md:bg-catalina-tile ${
        isActive(selectedNeed, need) && "bg-catalina-tile"
      }`}
      onClick={() => {
        setSelectedNeed(need);
        setSelectedScreen(Screen.CONFIRM_SELECTION);
      }}
    >
      <p className="mb-4 text-2xl font-bold text-sepia-black md:text-5xl">
        {need.label}
      </p>
      <p className="font-semibold italic text-sepia-black md:text-xl">
        {need.description}
      </p>
    </button>
  );
};

export default Need;
