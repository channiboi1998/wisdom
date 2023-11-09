"use client";

import ArrowIcon from "@/components/icons/arrow-icon";
import CookieIcon from "@/components/icons/cookie-icon";
import RestartIcon from "@/components/icons/restart-icon";
import { useFeelingStore } from "@/zustand/feeling";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Complete = () => {
  const { setSelectedScreen } = useScreenStore();
  const { setSelectedFeeling } = useFeelingStore();
  const { setSelectedNeed } = useNeedStore();

  const restart = () => {
    setSelectedFeeling(null);
    setSelectedNeed(null);
    setSelectedScreen(Screen.SELECT_FEELING);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="max-w-7xl text-center">
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          Thank you for your courage in welcoming and exploring this feeling.
        </p>
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          We hope this experience has offered you some comfort. If you did not
          resonate with what was provided, feel free to start again or explore
          other services that might better cater to your needs. Remember, you
          are welcome back anytime.
        </p>
        <p className="mb-8 text-xl font-semibold italic text-bootstrap-leather md:text-4xl">
          With gratitude and love,
        </p>
        <div className="mb-8 flex flex-row items-center justify-center space-x-2">
          <p className="text-xl font-semibold italic text-bootstrap-leather md:text-4xl">
            The Being Baked team
          </p>
          <Image
            className="h-8 w-8 md:h-10 md:w-10"
            src="/heart.png"
            alt="test"
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* Actions */}
      <div className="mt-5 flex flex-row items-center justify-center">
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          <button
            onClick={() => {
              setSelectedScreen(Screen.RESULT);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="rotate-180 p-2 text-bootstrap-leather"
          >
            <ArrowIcon
              className="h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
              fill="#793723"
            />
          </button>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          <button onClick={restart} className="p-2 text-bootstrap-leather">
            <RestartIcon
              className="h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
              fill="#793723"
            />
          </button>
        </div>
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          <Link
            className="p-2 text-bootstrap-leather"
            href="https://beingbakedcookies.ca"
            target="_blank"
          >
            <CookieIcon
              className="h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
              fill="#793723"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Complete;
