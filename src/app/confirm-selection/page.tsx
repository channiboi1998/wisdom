"use client";

import { usePersistStore } from "@/zustand/persist";
import Link from "next/link";

export default function Page() {
  const { selectedFeeling, selectedNeed } = usePersistStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>
        Presently, you feel `{selectedFeeling?.fields.label}`. and you need `
        {selectedNeed?.fields.label}`.
      </h1>
      <h3>your feelings are valid, just like you needs deserve to be met.</h3>
      <h3>
        Before moving forward, we invite you to take a pause here to close your
        eyes and breathe deeply-only if you feel comfortable. When you are
        ready, press next.
      </h3>
      <div className="mt-10">
        <Link className="border p-2" href="/select-need">
          Go back
        </Link>
        <Link className="border p-2" href="/result">
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
