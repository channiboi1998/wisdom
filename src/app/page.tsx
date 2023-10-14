"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import Link from "next/link";
import { useFeelingStore } from "@/zustand/feeling";

export default function Page() {
  const { setFeelings, feelings, setSelectedFeeling, selectedFeeling } =
    useFeelingStore();
  const { fetchFeelings } = useContentful();

  useEffect(() => {
    fetchFeelings().then((response) => {
      if (response) {
        console.log("feelings are:", response);
        setFeelings(response);
      }
    });
  }, []);

  useEffect(() => {
    console.log(selectedFeeling);
  }, [selectedFeeling]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Hi friend, how are you feeling today?</h1>
      <div>
        {feelings &&
          feelings.items.map((feeling, index) => (
            <button
              key={index}
              className={`border p-2 ${
                selectedFeeling === feeling.fields.label ? "bg-gray-500" : ""
              }`}
              onClick={() => setSelectedFeeling(feeling.fields.label)}
            >
              {feeling.fields.label}
            </button>
          ))}
      </div>
      <div>
        <Link href="/select-need">Next</Link>
        <Link href="https://beingbakedcookies.ca" target="_blank">
          Homepage
        </Link>
      </div>
    </div>
  );
}
