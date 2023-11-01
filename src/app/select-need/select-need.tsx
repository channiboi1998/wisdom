"use client";

import React from "react";
import { useFeelingStore } from "@/zustand/feeling";
import Need from "./need";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import useGetNeeds from "@/hooks/use-get-needs";

const SelectNeed = () => {
  useGetNeeds();
  const { setSelectedScreen } = useScreenStore();
  const { selectedFeeling } = useFeelingStore();
  const { needs, selectedNeed } = useNeedStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>
        Presently, you feel `{selectedFeeling?.label}`. What do you need most?
      </h1>
      {needs &&
        needs.items.map((need, index) => <Need need={need} key={index} />)}
      <div className="mt-10">
        <button
          onClick={() => setSelectedScreen(Screen.SELECT_FEELING)}
          className="border p-2"
        >
          Go back
        </button>
        {selectedNeed && (
          <button
            onClick={() => setSelectedScreen(Screen.CONFIRM_SELECTION)}
            className="border p-2"
          >
            Next
          </button>
        )}
        <Link
          className="border p-2"
          href="https://beingbakedcookies.ca"
          target="_blank"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default SelectNeed;
