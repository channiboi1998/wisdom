"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import React from "react";

const SelectNeedActions = () => {
  const { setSelectedScreen } = useScreenStore();
  return (
    <div className="mt-10">
      <button
        onClick={() => setSelectedScreen(Screen.SELECT_FEELING)}
        className="border p-2"
      >
        Go back
      </button>
      <button
        onClick={() => setSelectedScreen(Screen.CONFIRM_SELECTION)}
        className="border p-2"
      >
        Next
      </button>
      <Link
        className="border p-2"
        href="https://beingbakedcookies.ca"
        target="_blank"
      >
        Homepage
      </Link>
    </div>
  );
};

export default SelectNeedActions;
