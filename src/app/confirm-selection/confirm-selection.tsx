"use client";

import { useFeelingStore } from "@/zustand/feeling";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import React from "react";

const ConfirmSelection = () => {
  const { setSelectedScreen } = useScreenStore();
  const { selectedNeed } = useNeedStore();
  const { selectedFeeling } = useFeelingStore();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>
        Presently, you feel `{selectedFeeling?.label}`, and you need `
        {selectedNeed?.label}`.
      </p>
      <p>Your feelings are valid, just like your needs deserve to be met.</p>
      <p>
        Before moving forward, we invite you to take a pause here to close your
        eyes and breathe deeply- only if you feel comfortable. When you are
        ready, press next.
      </p>
      <div className="mt-10">
        <button
          onClick={() => setSelectedScreen(Screen.SELECT_NEED)}
          className="border p-2"
        >
          Go back
        </button>
        <button
          onClick={() => setSelectedScreen(Screen.RESULT)}
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
    </div>
  );
};

export default ConfirmSelection;
