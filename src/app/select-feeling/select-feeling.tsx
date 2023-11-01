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
    <div>
      <h1>Hi friend, how are you feeling today?</h1>
      <div className="grid grid-cols-2 gap-4">
        {feelings &&
          feelings.map((feeling, index) => (
            <Feeling feeling={feeling} key={index} />
          ))}
      </div>

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
