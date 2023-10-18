"use client";

import { usePersistStore } from "@/zustand/persist";
import React from "react";

const SelectionMessage = () => {
  const { selectedFeeling, selectedNeed } = usePersistStore();
  return (
    <h1>
      Presently, you feel `{selectedFeeling?.fields.label}`. and you need `
      {selectedNeed?.fields.label}`.
    </h1>
  );
};

export default SelectionMessage;
