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
      className={`text-md rounded-2xl p-2 font-semibold text-sepia-black hover:bg-catalina-tile md:text-xl ${
        selectedFeeling && selectedFeeling?.label === feeling.label
          ? " bg-catalina-tile"
          : ""
      }`}
      onClick={() => setSelectedFeeling(feeling)}
    >
      {feeling.image?.url && (
        <Image
          className="m-auto mb-2 h-28 w-auto lg:h-40 lg:w-40"
          alt={
            typeof feeling.image.title === "string"
              ? feeling.image.title
              : "alternative text"
          }
          src={feeling.image.url}
          width={100}
          height={100}
        />
      )}
      {feeling.label}
    </button>
  );
};

export default Feeling;
