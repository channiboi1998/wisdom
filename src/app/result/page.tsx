"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import Link from "next/link";
import { usePersistStore } from "@/zustand/persist";

export default function Page() {
  const { selectedFeeling, selectedNeed } = usePersistStore();
  const { fetchMessages } = useContentful();

  useEffect(() => {
    fetchMessages({
      feelingId: selectedFeeling?.sys.id,
      needId: selectedNeed?.sys.id,
    }).then((response) => {
      console.log("messages are:", response);
    });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3>
        If you are open to it, we recommend reading the following out loud. Stay
        however long you need.
      </h3>
      <h1>[message content]</h1>
      <div>
        <Link href="/confirm-selection">Go back</Link>
        <Link href="/complete">Next</Link>
        <Link href="https://beingbakedcookies.ca" target="_blank">
          Homepage
        </Link>
      </div>
    </div>
  );
}
