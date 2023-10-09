import React from "react";
import { Need } from "../../helpers/enums";
import { useMessageStore } from "../../zustand/messages";

const ScreenTwo = () => {
  const { setNeed } = useMessageStore();
  return (
    <>
      <h2 className="text-4xl mb-4">What do you need?</h2>
      <div className="flex flex-row items-center justify-center space-x-2">
        {[Need.AFFIRMATION, Need.REFLECTION].map(
          (need: Need, index: number) => (
            <button
              key={index}
              onClick={() => setNeed(need)}
              className="border p-2"
            >
              {need}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default ScreenTwo;
