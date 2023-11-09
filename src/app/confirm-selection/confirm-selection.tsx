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
      <Card className="max-w-[1200px]">
        <div className="items-center justify-center text-center md:flex md:flex-row md:space-x-6">
          {selectedFeeling?.image?.url && (
            <Image
              className="m-auto mb-2 h-[120px] w-[120px] md:h-[190px] md:w-[190px]"
              alt="test"
              src={selectedFeeling.image.url}
              width={200}
              height={200}
            />
          )}
          <h1 className="text-center text-2xl font-bold leading-tight text-bootstrap-leather md:text-4xl lg:text-5xl">
            Presently you feel
            <span className="text-grape">&nbsp;{selectedFeeling?.label}</span>
            ,<br />
            and you need
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
          your eyes and breathe deeply—only if you feel comfortable. Notice any
          tension in your body and gently try to release it.
        </p>
        <p className="mb-8 text-xl font-semibold text-bootstrap-leather md:text-4xl">
          When you’re ready, press next.
        </p>
      </div>
      {/* Actions */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex h-20 w-20 flex-col items-center justify-center">
          <button
            onClick={() => {
              setSelectedScreen(Screen.SELECT_NEED);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="p-2 text-bootstrap-leather"
          >
            <ArrowIcon
              className="h-[50px] w-[50px] rotate-180 hover:h-[60px] hover:w-[60px]"
              fill="#793723"
            />
          </button>
        </div>
        {selectedNeed && (
          <div className="flex h-20 w-20 flex-col items-center justify-center">
            <button
              onClick={() => {
                setSelectedScreen(Screen.RESULT);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="p-2 text-bootstrap-leather"
            >
              <ArrowIcon
                className="h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
                fill="#793723"
              />
            </button>
          </div>
        )}

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

export default ConfirmSelection;
