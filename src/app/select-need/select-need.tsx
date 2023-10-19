import useContentful from "@/services/contentful";
import dynamic from "next/dynamic";
import React from "react";

const SelectNeed = async () => {
  const { fetchNeeds } = useContentful();
  const needs = await fetchNeeds();
  const Need = dynamic(() => import("./need"), { ssr: false });
  const Heading = dynamic(() => import("./heading"), { ssr: false });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Heading />
      {needs &&
        needs.items.map((need, index) => <Need need={need} key={index} />)}
    </div>
  );
};

export default SelectNeed;
