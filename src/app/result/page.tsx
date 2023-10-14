import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3>
        If you are open to it, we recommend reading the following out loud. Stay
        however long you need.
      </h3>
      <h1>[message content]</h1>
      <div>
        <Link href="/select-need">Go back</Link>
        <Link href="/complete">Next</Link>
        <Link href="https://beingbakedcookies.ca" target="_blank">
          Homepage
        </Link>
      </div>
    </div>
  );
}
