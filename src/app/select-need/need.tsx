"use client";

import { NeedEntrySkeleton } from "@/services/contentful";
import { usePersistStore } from "@/zustand/persist";
import { Entry } from "contentful";
import React from "react";

type Props = {
  need: Entry<NeedEntrySkeleton, undefined, string>;
};

const Need = ({ need }: Props) => {
  const { selectedNeed, setSelectedNeed } = usePersistStore();
  return (
    <button
      className={`border p-2 ${
        selectedNeed?.fields.label === need.fields.label ? "bg-gray-500" : ""
      }`}
      onClick={() => setSelectedNeed(need)}
    >
      {need.fields.label}
    </button>
  );
};

export default Need;
