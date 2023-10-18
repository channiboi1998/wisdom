"use client";

import { FeelingEntrySkeleton } from "@/services/contentful";
import { usePersistStore } from "@/zustand/persist";
import { Entry } from "contentful";
import React from "react";

type Props = {
  feeling: Entry<FeelingEntrySkeleton, undefined, string>;
};

const Feeling = ({ feeling }: Props) => {
  const { selectedFeeling, setSelectedFeeling } = usePersistStore();
  return (
    <button
      className={`border p-2 ${
        selectedFeeling &&
        selectedFeeling?.fields?.label === feeling.fields.label
          ? "bg-gray-500"
          : ""
      }`}
      onClick={() => setSelectedFeeling(feeling)}
    >
      {feeling.fields.label}
    </button>
  );
};

export default Feeling;
