"use client";

import { NeedEntrySkeleton } from "@/services/contentful";
import { useNeedStore } from "@/zustand/need";
import { Entry } from "contentful";
import React from "react";

type Props = {
  need: Entry<NeedEntrySkeleton, undefined, string>;
};

const Need = ({ need }: Props) => {
  const { selectedNeed, setSelectedNeed } = useNeedStore();
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
