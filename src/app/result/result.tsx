"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import React from "react";

const Result = () => {
  const { setSelectedScreen } = useScreenStore();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>
        If you are open to it, we recommend reading the following out loud. Stay
        here however long you need.
      </p>
      <p>[the message content]</p>
      <div className="mt-10">
        <button
          onClick={() => setSelectedScreen(Screen.CONFIRM_SELECTION)}
          className="border p-2"
        >
          Go back
        </button>
        <button
          onClick={() => setSelectedScreen(Screen.COMPLETE)}
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

export default Result;
