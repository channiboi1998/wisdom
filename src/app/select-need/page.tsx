"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import { useNeedStore } from "@/zustand/need";
import Link from "next/link";
import { useFeelingStore } from "@/zustand/feeling";

export default function Page() {
  const { selectedFeeling } = useFeelingStore();
  const { setNeeds, needs, selectedNeed, setSelectedNeed } = useNeedStore();
  const { fetchNeeds } = useContentful();

  useEffect(() => {
    fetchNeeds().then((response) => {
      if (response) {
        console.log("needs are:", response);
        setNeeds(response);
      }
    });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Presently, you feel `{selectedFeeling}`. What do you need most?</h1>
      {needs &&
        needs.items.map((need, index) => (
          <button
            key={index}
            className={`border p-2 ${
              selectedNeed === need.fields.label ? "bg-gray-500" : ""
            }`}
            onClick={() => setSelectedNeed(need.fields.label)}
          >
            {need.fields.label}
          </button>
        ))}

      <div>
        <Link href="/">Go back</Link>
        <Link href="/confirm-selection">Next</Link>
        <Link href="https://beingbakedcookies.ca" target="_blank">
          Homepage
        </Link>
      </div>
    </div>
  );
}
