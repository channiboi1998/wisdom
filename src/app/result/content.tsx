"use client";

import { usePersistStore } from "@/zustand/persist";
import React from "react";
import Message from "./message";

const Content = () => {
  const { selectedMessage, selectedFeeling, selectedNeed, setSelectedMessage } =
    usePersistStore();
  return (
    <Message
      selectedFeeling={selectedFeeling}
      selectedNeed={selectedNeed}
      selectedMessage={selectedMessage}
      setSelectedMessage={setSelectedMessage}
    />
  );
};

export default Content;
