"use client";

import { Screen, useScreenStore } from "@/zustand/screen";
import Link from "next/link";
import React from "react";

const Complete = () => {
  const { setSelectedScreen } = useScreenStore();
  return (
    <div>
      <p>Thank you for your courage in welcoming and exploring this feeling.</p>
      <p>
        We hope this experience has offered you some comfort as you navigate
        feelings that may be more difficult and uncomfortable. If you did not
        resonate with what was provided, feel free to start again. Remember, you
        are welcome back anytime.
      </p>
      <p>With gratitude and love,</p>
      <p>The being baked team</p>
      <div className="mt-10">
        <button
          onClick={() => setSelectedScreen(Screen.RESULT)}
          className="border p-2"
        >
          Go back
        </button>
        <button
          onClick={() => setSelectedScreen(Screen.SELECT_FEELING)}
          className="border p-2"
        >
          Start Again
        </button>
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
};

export default Complete;
