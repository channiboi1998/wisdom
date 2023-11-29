"use client";

import { useFeelingStore } from "@/zustand/feeling";
import Feeling from "./feeling";
import Link from "next/link";
import { useScreenStore } from "@/zustand/screen";
import useGetFeelings from "@/hooks/use-get-feelings";
import Card from "@/components/common/card";
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
      <div className="flex flex-row items-center justify-center">
        {/* {selectedFeeling && (
          <div className="flex h-20 w-20 flex-col items-center justify-center">
            <button
              onClick={() => {
                window.scroll({ top: 0 });
                setSelectedScreen(Screen.SELECT_NEED);
              }}
              className="p-2 text-bootstrap-leather"
            >
              <ArrowIcon
                className="h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
                fill="#793723"
              />
            </button>
          </div>
        )} */}
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

export default SelectFeeling;
