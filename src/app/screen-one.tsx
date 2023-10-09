"use client";

import React from "react";
import { Feeling } from "../../helpers/enums";

type Props = {
  feeling?: Feeling;
  setFeeling: (feeling: Feeling) => void;
};

const ScreenOne = ({ setFeeling }: Props) => {
  return (
    <>
      <h2 className="text-4xl mb-4">How are you feeling today?</h2>
      <div className="flex flex-row items-center justify-center space-x-2">
        {[Feeling.LONELY, Feeling.WORRIED].map(
          (feeling: Feeling, index: number) => (
            <button
              key={index}
              onClick={() => setFeeling(feeling)}
              className={"border p-2"}
            >
              {feeling}
            </button>
          )
        )}
      </div>
      <div className="my-10">
        <button className="border p-2">next</button>
      </div>
    </>
  );
};

export default ScreenOne;
