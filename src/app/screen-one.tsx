import React from "react";
import { Feeling, Screen } from "../../helpers/enums";

type Props = {
  selectedFeeling: Feeling | null;
  setFeeling: (feeling: Feeling) => void;
  setCurrentScreen: (screen: Screen) => void;
};

const ScreenOne = ({
  setFeeling,
  selectedFeeling,
  setCurrentScreen,
}: Props) => {
  return (
    <>
      <h2>How are you feeling today?</h2>
      <div className="flex flex-row items-center justify-center space-x-2">
        {[Feeling.LONELY, Feeling.WORRIED].map(
          (feeling: Feeling, index: number) => (
            <button
              key={index}
              onClick={() => setFeeling(feeling)}
              className={`border p-2 ${
                selectedFeeling === feeling ? "bg-gray-300" : ""
              }`}
            >
              {feeling}
            </button>
          )
        )}
      </div>
      <div className="my-10">
        {selectedFeeling && (
          <button
            className="border p-2"
            onClick={() => setCurrentScreen(Screen.TWO)}
          >
            next
          </button>
        )}
      </div>
    </>
  );
};

export default ScreenOne;
