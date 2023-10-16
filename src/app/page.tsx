"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import Link from "next/link";
import { useFeelingStore } from "@/zustand/feeling";
import { usePersistStore } from "@/zustand/persist";

export default function Page() {
  const { selectedFeeling, setSelectedFeeling } = usePersistStore();
  const { setFeelings, feelings } = useFeelingStore();
  const { fetchFeelings } = useContentful();

  useEffect(() => {
    fetchFeelings().then((response) => {
      if (response) {
        console.log("feelings are:", response);
        setFeelings(response);
      }
    });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Hi friend, how are you feeling today?</h1>
      <div>
        {feelings &&
          feelings.items.map((feeling, index) => (
            <button
              key={index}
              className={`border p-2 ${
                selectedFeeling?.fields?.label === feeling.fields.label
                  ? "bg-gray-500"
                  : ""
              }`}
              onClick={() => setSelectedFeeling(feeling)}
            >
              {feeling.fields.label}
            </button>
          ))}
      </div>
      <div className="mt-10">
        <Link href="/select-need" className="border p-2">
          Next
        </Link>
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
}
