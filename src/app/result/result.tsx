"use client";

import { NeedEntrySkeleton } from "@/services/contentful";
import { useMessageStore } from "@/zustand/message";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import { Entry } from "contentful";
import Link from "next/link";
import React from "react";

const Result = () => {
  const { selectedNeed } = useNeedStore();
  const { setSelectedScreen } = useScreenStore();
  const { randomMessage } = useMessageStore();

  const adviceMessage = (
    selectedNeed: Entry<NeedEntrySkeleton, undefined, string> | null
  ): string | null => {
    if (selectedNeed) {
      if (selectedNeed.fields.label === "Reflection") {
        return "Feel free to reflect in a way that resonates with you—whether through conversation, writing, drawing, walking, or simply sitting in silence.";
      } else if (selectedNeed.fields.label === "Affirmation") {
        return "If you are open to it, we recommend reading the following out loud. Stay here however long you need.";
      }
    }
    return null;
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>{adviceMessage(selectedNeed)}</p>
      <p>
        {randomMessage
          ? randomMessage.fields.message
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
