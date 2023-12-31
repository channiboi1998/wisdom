import Disclaimer from "@/components/modals/disclaimer";
import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Being Baked Cookies App",
  description:
    "Welcome to the free Being Baked Cookies App – your companion for navigating emotional landscapes and finding solace during challenging moments. This mental health support platform is designed to gently guide you through emotional regulation by inviting self-awareness. Every affirmation and reflection within the app is thoughtfully crafted to nurture and enhance your overall well-being.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} relative flex min-h-screen flex-col items-center justify-center bg-powdered-peach`}
      >
        <Disclaimer />
        <div className="relative flex w-10/12 max-w-7xl flex-col items-center justify-center py-8 md:py-14">
          {children}
        </div>
      </body>
    </html>
  );
}
