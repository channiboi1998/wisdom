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
      className={`text-md p-2 font-semibold text-bootstrap-leather md:text-xl ${
        selectedFeeling && selectedFeeling?.label === feeling.label
          ? "rounded-2xl bg-catalina-tile"
          : ""
      }`}
      onClick={() => setSelectedFeeling(feeling)}
    >
      {feeling.image?.url && (
        <Image
          className="m-auto mb-2 lg:h-40 lg:w-40"
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
