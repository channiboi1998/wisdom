"use client";

import { Feeling, useFeelingStore } from "@/zustand/feeling";
import React from "react";

type Props = {
  feeling: Feeling;
};

const Feeling = ({ feeling }: Props) => {
  const { selectedFeeling, setSelectedFeeling } = useFeelingStore();
  return (
    <button
      className={`border p-2 ${
        selectedFeeling && selectedFeeling?.label === feeling.label
          ? "bg-gray-500"
          : ""
      }`}
      onClick={() => setSelectedFeeling(feeling)}
    >
      {feeling.label}
    </button>
  );
};

export default Feeling;
