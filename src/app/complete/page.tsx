import Link from "next/link";

export default function Page() {
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
      <div>
        <Link href="/result">Go back</Link>
        <Link href="/">Start again</Link>
        <Link href="https://beingbakedcookies.ca" target="_blank">
          Homepage
        </Link>
      </div>
    </div>
  );
}
