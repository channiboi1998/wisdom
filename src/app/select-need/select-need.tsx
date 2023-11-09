"use client";

import React from "react";
import { useFeelingStore } from "@/zustand/feeling";
import Need from "./need";
import { useNeedStore } from "@/zustand/need";
import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import useGetNeeds from "@/hooks/use-get-needs";
import Card from "@/components/common/card";
import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-icon";
import CookieIcon from "@/components/icons/cookie-icon";

const SelectNeed = () => {
  useGetNeeds();
  const { setSelectedScreen } = useScreenStore();
  const { selectedFeeling } = useFeelingStore();
  const { needs, selectedNeed } = useNeedStore();

  return (
    <>
      {/* Card Component */}
      <Card>
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
          <h1 className="text-center text-2xl font-bold leading-tight text-bootstrap-leather md:max-w-[780px] md:text-4xl lg:text-5xl">
            Presently you feel
            <span className="text-grape">&nbsp;{selectedFeeling?.label}</span>.
            <br />
            &nbsp;What do you need most?
          </h1>
        </div>
      </Card>
      {/* Need Grid */}
      <div className="flex flex-col pb-10 pt-5 md:flex-row md:space-x-10 md:py-10">
        {needs && needs.map((need, index) => <Need need={need} key={index} />)}
      </div>
      {/* Actions */}
      <div className="mt-10 flex flex-row items-center justify-center space-x-5 text-center">
        <button
          onClick={() => {
            setSelectedScreen(Screen.SELECT_FEELING);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="p-2 text-bootstrap-leather"
        >
          <ArrowIcon className="h-[50px] w-[50px] rotate-180" fill="#793723" />
        </button>
        {selectedNeed && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setSelectedScreen(Screen.CONFIRM_SELECTION);
            }}
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

export default SelectNeed;
