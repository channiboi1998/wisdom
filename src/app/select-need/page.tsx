"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import { useNeedStore } from "@/zustand/need";
import Link from "next/link";
import { usePersistStore } from "@/zustand/persist";

export default function Page() {
  const { selectedFeeling, selectedNeed, setSelectedNeed } = usePersistStore();
  const { setNeeds, needs } = useNeedStore();
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
      <h1>
        Presently, you feel `{selectedFeeling?.fields?.label}`. What do you need
        most?
      </h1>
      {needs &&
        needs.items.map((need, index) => (
          <button
            key={index}
            className={`border p-2 ${
              selectedNeed?.fields.label === need.fields.label
                ? "bg-gray-500"
                : ""
            }`}
            onClick={() => setSelectedNeed(need)}
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
