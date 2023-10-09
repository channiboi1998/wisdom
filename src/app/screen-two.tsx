import React from "react";
import { Feeling, Need, Screen } from "../../helpers/enums";

type Props = {
  feeling: Feeling | null;
  setCurrentScreen: (payload: Screen) => void;
  selectedNeed: Need | null;
  setNeed: (payload: Need | null) => void;
};

const ScreenTwo = ({
  setNeed,
  setCurrentScreen,
  selectedNeed,
  feeling,
}: Props) => {
  return (
    <>
      <h2>Presently you feel `{feeling}`. What do you need most?</h2>
      <div className="flex flex-row items-center justify-center space-x-2">
        {[Need.AFFIRMATION, Need.REFLECTION].map(
          (need: Need, index: number) => (
            <button
              key={index}
              onClick={() => setNeed(need)}
              className={`border p-2 ${
                selectedNeed === need ? "bg-gray-300" : ""
              }`}
            >
              {need}
            </button>
          )
        )}
      </div>
      <div className="my-10">
        <button
          className="border p-2"
          onClick={() => {
            setCurrentScreen(Screen.ONE);
          }}
        >
          back
        </button>
        {selectedNeed && (
          <button
            className="border p-2"
            onClick={() => setCurrentScreen(Screen.THREE)}
          >
            next
          </button>
        )}
      </div>
    </>
  );
};

export default ScreenTwo;
