"use client";

import { adviceMessage } from "@/utils/needs.util";
import { useMessageStore } from "@/zustand/message";
import { Need, useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import React from "react";

const Result = () => {
  const { selectedNeed } = useNeedStore();
  const { setSelectedScreen } = useScreenStore();
  const { randomMessage } = useMessageStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>{adviceMessage(selectedNeed)}</p>
      <p>
        {randomMessage
          ? randomMessage.message
          : "(no message found based on selection)"}
      </p>
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
