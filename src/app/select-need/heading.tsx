"use client";

import { usePersistStore } from "@/zustand/persist";
import React from "react";

const Heading = () => {
  const { selectedFeeling } = usePersistStore();
  return (
    <h1>
      Presently, you feel `{selectedFeeling?.fields.label}`. What do you need
      most?
    </h1>
  );
};

export default Heading;
