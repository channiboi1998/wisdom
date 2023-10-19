"use client";

import { useScreenStore } from "@/zustand/screen";

export default function Page() {
  const {} = useScreenStore();
  return <>Sample Page</>;
}
