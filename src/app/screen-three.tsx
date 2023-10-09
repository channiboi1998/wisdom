import React from "react";
import { Feeling, Need, Screen } from "../../helpers/enums";

type Props = {
  setCurrentScreen: (payload: Screen) => void;
  feeling: Feeling | null;
  need: Need | null;
};

const ScreenThree = ({ feeling, need, setCurrentScreen }: Props) => {
  return (
    <>
      <div>
        <h2>
          Presently, you feel `{feeling}`, and you need `{need}`.
        </h2>
        <p>
          Your feelings are valid, just like your needs deserve to be met.
          Before moving forward, we invite you to take a pause here to close
          your eyes and breathe deeply-only if you feel comfortable. When you
          are ready, press next.
        </p>
      </div>
      <div className="my-10">
        <button
          className="border p-2"
          onClick={() => {
            setCurrentScreen(Screen.TWO);
          }}
        >
          back
        </button>
        <button
          className="border p-2"
          onClick={() => setCurrentScreen(Screen.FOUR)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default ScreenThree;
