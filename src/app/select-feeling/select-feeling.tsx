import useContentful from "@/services/contentful";
import dynamic from "next/dynamic";
import React from "react";
import SelectFeelingActions from "./select-feeling-actions";

const SelectFeeling = async () => {
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
      <SelectFeelingActions />
    </div>
  );
};

export default SelectFeeling;
