"use client";

import { useFeelingStore } from "@/zustand/feeling";
import Feeling from "./feeling";
import Link from "next/link";
import { Screen, useScreenStore } from "@/zustand/screen";
import useGetFeelings from "@/hooks/use-get-feelings";

const SelectFeeling = () => {
  useGetFeelings();
  const { setSelectedScreen } = useScreenStore();
  const { feelings, selectedFeeling } = useFeelingStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Hi friend, how are you feeling today?</h1>
      {feelings &&
        feelings.items.map((feeling, index) => (
          <Feeling feeling={feeling} key={index} />
        ))}
      <div className="mt-10">
        {selectedFeeling && (
          <button
            onClick={() => setSelectedScreen(Screen.SELECT_NEED)}
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

export default SelectFeeling;
