"use client";

import React, { useEffect } from "react";
import { useFeelingStore } from "@/zustand/feeling";
import Feeling from "./feeling";
import useContentful from "@/services/contentful";
import Link from "next/link";
import { Screen, useScreenStore } from "@/zustand/screen";

const SelectFeeling = () => {
  const { fetchFeelings } = useContentful();
  const { setSelectedScreen } = useScreenStore();
  const { feelings, setFeelings, selectedFeeling } = useFeelingStore();

  useEffect(() => {
    fetchFeelings().then((response) => {
      if (response) {
        setFeelings(response);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
