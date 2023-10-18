import useContentful from "@/services/contentful";
import dynamic from "next/dynamic";
import Link from "next/link";

export default async function Page() {
  const { fetchNeeds } = useContentful();
  const needs = await fetchNeeds();
  const Need = dynamic(() => import("./need"), { ssr: false });
  const Heading = dynamic(() => import("./heading"), { ssr: false });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Heading />
      {needs &&
        needs.items.map((need, index) => <Need need={need} key={index} />)}
      <div className="mt-10">
        <Link href="/" className="border p-2">
          Go back
        </Link>
        <Link href="/confirm-selection" className="border p-2">
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
