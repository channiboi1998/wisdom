"use client";

import { useFeelingStore } from "@/zustand/feeling";
import React from "react";

const Heading = () => {
  const { selectedFeeling } = useFeelingStore();
  return (
    <h1>
      Presently, you feel `{selectedFeeling?.fields.label}`. What do you need
      most?
    </h1>
  );
};

export default Heading;
