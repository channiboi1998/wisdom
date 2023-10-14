import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Presently, you feel ``. What do you need most?</h1>
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
