"use client";

import { NeedEntrySkeleton } from "@/services/contentful";
import { Need, useNeedStore } from "@/zustand/need";
import { Entry } from "contentful";
import React from "react";

type Props = {
  need: Need;
};

const Need = ({ need }: Props) => {
  const { selectedNeed, setSelectedNeed } = useNeedStore();
  return (
    <button
      className={`border p-2 ${
        selectedNeed?.label === need.label ? "bg-gray-500" : ""
      }`}
      onClick={() => setSelectedNeed(need)}
    >
      {need.label}
      <br />
      {need.description}
    </button>
  );
};

export default Need;
