"use client";

import Card from "@/components/common/card";
import ArrowIcon from "@/components/icons/arrow-icon";
import CookieIcon from "@/components/icons/cookie-icon";
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
    <>
      <div className="max-w-4xl pb-10 text-center">
        <p className="text-lg font-semibold italic text-bootstrap-leather md:text-2xl">
          {adviceMessage(selectedNeed)}
        </p>
      </div>
      <Card>
        {randomMessage ? (
          <h1 className="text-center text-lg font-semibold text-bootstrap-leather md:text-4xl">
            {randomMessage.message}
          </h1>
        ) : (
          "(no message found based on selection)"
        )}
      </Card>
      {/* Actions */}
      <div className="mt-10 flex flex-row items-center justify-center space-x-5 text-center">
        <button
          onClick={() => setSelectedScreen(Screen.CONFIRM_SELECTION)}
          className="p-2 text-bootstrap-leather"
        >
          <ArrowIcon className="h-[50px] w-[50px] rotate-180" fill="#793723" />
        </button>
        {selectedNeed && (
          <button
            onClick={() => setSelectedScreen(Screen.COMPLETE)}
            className="p-2 text-bootstrap-leather"
          >
            <ArrowIcon className="h-[50px] w-[50px]" fill="#793723" />
          </button>
        )}
        <Link
          className="p-2 text-bootstrap-leather"
          href="https://beingbakedcookies.ca"
          target="_blank"
        >
          <CookieIcon className="h-[50px] w-[50px]" fill="#793723" />
        </Link>
      </div>
    </>
  );
};

export default Result;
