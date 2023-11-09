"use client";

import { useFeelingStore } from "@/zustand/feeling";
import Feeling from "./feeling";
import Link from "next/link";
import { Screen, useScreenStore } from "@/zustand/screen";
import useGetFeelings from "@/hooks/use-get-feelings";
import Card from "@/components/common/card";
import ArrowIcon from "@/components/icons/arrow-icon";
import CookieIcon from "@/components/icons/cookie-icon";

const SelectFeeling = () => {
  useGetFeelings();
  const { setSelectedScreen } = useScreenStore();
  const { feelings, selectedFeeling } = useFeelingStore();

  return (
    <>
      {/* Card Component */}
      <Card>
        <div className="py-4 md:px-10 md:py-8">
          <h1 className="mb-2 text-center text-2xl font-bold leading-tight text-bootstrap-leather md:text-4xl lg:text-5xl">
            Hi friend, <br /> how are you feeling today?
          </h1>
          <p className="m-auto max-w-xl text-center italic text-bootstrap-leather md:text-lg lg:text-xl">
            We understand more than one feeling can exist at the same time—for
            now, choose the emotion that feels most present.
          </p>
        </div>
      </Card>
      {/* Feelings Grid */}
      <div className="grid grid-cols-2 gap-10 pb-10 pt-5 md:grid-cols-3 lg:grid-cols-4">
        {feelings &&
          feelings.map((feeling, index) => (
            <Feeling feeling={feeling} key={index} />
          ))}
      </div>
      {/* Actions */}
      <div className="flex flex-row items-center justify-center space-x-5 text-center">
        {selectedFeeling && (
          <button
            onClick={() => {
              setSelectedScreen(Screen.SELECT_NEED);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

export default SelectFeeling;
