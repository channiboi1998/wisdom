"use client";

import Card from "@/components/common/card";
import ArrowIcon from "@/components/icons/arrow-icon";
import CookieIcon from "@/components/icons/cookie-icon";
import { useFeelingStore } from "@/zustand/feeling";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConfirmSelection = () => {
  const { setSelectedScreen } = useScreenStore();
  const { selectedNeed } = useNeedStore();
  const { selectedFeeling } = useFeelingStore();
  return (
    <>
      {/* Card Component */}
      <Card>
        <div className="items-center justify-center text-center md:flex md:flex-row md:space-x-6">
          {selectedFeeling?.image?.url && (
            <Image
              className="m-auto mb-2 md:h-[150px] md:w-[150px]"
              alt="test"
              src={selectedFeeling.image.url}
              width={100}
              height={100}
            />
          )}
          <h1 className="text-center text-2xl font-bold leading-tight text-bootstrap-leather md:max-w-[900px] md:text-4xl lg:text-5xl">
            Presently, you feel
            <span className="text-grape">&nbsp;{selectedFeeling?.label}</span>
            ,&nbsp;and you need
            <span className="text-grape">&nbsp;{selectedNeed?.label}</span>.
          </h1>
        </div>
      </Card>
      <div className="max-w-6xl py-10 text-center">
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          Your feelings are valid, just like your needs deserve to be met.
        </p>
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          Before moving forward, we invite you to take a pause here to close
          your eyes and breathe deeply- only if you feel comfortable.
        </p>
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          When you are ready, press next.
        </p>
      </div>
      {/* Actions */}
      <div className="flex flex-row items-center justify-center space-x-5 text-center">
        <button
          onClick={() => setSelectedScreen(Screen.SELECT_NEED)}
          className="p-2 text-bootstrap-leather"
        >
          <ArrowIcon className="h-[50px] w-[50px] rotate-180" fill="#793723" />
        </button>
        {selectedNeed && (
          <button
            onClick={() => setSelectedScreen(Screen.RESULT)}
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

export default ConfirmSelection;
