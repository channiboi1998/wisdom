import useContentful from "@/services/contentful";
import Link from "next/link";
import dynamic from "next/dynamic";

export default async function Page() {
  const { fetchFeelings } = useContentful();
  const feelings = await fetchFeelings();
  const Feeling = dynamic(() => import("./feeling"), { ssr: false });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Hi friend, how are you feeling today?</h1>
      <div>
        {feelings &&
          feelings.items.map((feeling, index) => (
            <Feeling feeling={feeling} key={index} />
          ))}
      </div>
      <div className="mt-10">
        <Link href="/select-need" className="border p-2">
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
