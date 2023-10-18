import Link from "next/link";
import dynamic from "next/dynamic";

export default function Page() {
  const Content = dynamic(() => import("./content"), { ssr: false });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3>
        If you are open to it, we recommend reading the following out loud. Stay
        however long you need.
      </h3>
      <Content />
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
