"use client";

import { usePersistStore } from "@/zustand/persist";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { restart } = usePersistStore();

  const reset = () => {
    restart();
    router.push("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>
        Thank you for your courage in welcoming and exploring this feeling.
      </h1>
      <p>
        We hope this experience has offered you some comfort as you navigate
        feelings that may be more difficult and uncomfortable. If you did not
        resonate with what was provided, feel free to start again. Remeber, you
        are welcome back anytime.
      </p>
      <p>With gratitued and love,</p>
      <p>The being baked team</p>
      <div className="mt-10">
        <Link className="border p-2" href="/result">
          Go back
        </Link>
        <button className="border p-2" onClick={() => reset()}>
          Start again
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
}
