"use client";

import { Feeling, useFeelingStore } from "@/zustand/feeling";
import Image from "next/image";
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
      {feeling.image?.url && (
        <Image
          className="w-20 h-20"
          alt="test"
          src={feeling.image.url}
          width={50}
          height={50}
        />
      )}
      {feeling.label}
    </button>
  );
};

export default Feeling;
