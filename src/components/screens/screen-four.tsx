import React from "react";
import { Screen } from "../../../helpers/enums";

type Props = {
  setCurrentScreen: (payload: Screen) => void;
};

const ScreenFour = ({ setCurrentScreen }: Props) => {
  return (
    <>
      <p>
        If you are open to it, we recommend reading the following out loud. Stay
        here however long you need.
      </p>
      <p>[random content]</p>
      <div className="my-10">
        <button
          className="border p-2"
          onClick={() => {
            setCurrentScreen(Screen.THREE);
          }}
        >
          back
        </button>
        <button
          className="border p-2"
          onClick={() => setCurrentScreen(Screen.FIVE)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default ScreenFour;
