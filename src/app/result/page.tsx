"use client";

import { useEffect } from "react";
import useContentful from "@/services/contentful";
import Link from "next/link";
import { usePersistStore } from "@/zustand/persist";

export default function Page() {
  const { selectedFeeling, selectedNeed, selectedMessage, setSelectedMessage } =
    usePersistStore();
  const { fetchMessages } = useContentful();

  useEffect(() => {
    if (selectedMessage === null) {
      fetchMessages({
        feelingId: selectedFeeling?.sys.id,
        needId: selectedNeed?.sys.id,
      }).then((response) => {
        if (response && response.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.items.length);
          setSelectedMessage(response.items[randomIndex]);
        }
      });
    } else {
      console.log("has message saved");
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3>
        If you are open to it, we recommend reading the following out loud. Stay
        however long you need.
      </h3>
      <h1>{selectedMessage?.fields.message}</h1>
      <div className="mt-10">
        <Link className="border p-2" href="/confirm-selection">
          Go back
        </Link>
        <Link className="border p-2" href="/complete">
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
