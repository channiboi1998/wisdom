import React from "react";
import { Screen } from "../../helpers/enums";

type Props = {
  setCurrentScreen: (payload: Screen) => void;
  restart: () => void;
};

const ScreenFive = ({ setCurrentScreen, restart }: Props) => {
  return (
    <>
      <p>Thank you for your courage in welcoming and exploring this feeling.</p>
      <p>
        We hope this experience has offered you some comfort as you navigation
        feelings that may be more difficult and uncomfortable. If you did not
        resonate with what was provided, feel free to start again. Remember, you
        are welcom back anytime.
      </p>
      <p>With gratitude and love,</p>
      <p>The being baked team</p>
      <div className="my-10">
        <button
          className="border p-2"
          onClick={() => {
            setCurrentScreen(Screen.FOUR);
          }}
        >
          back
        </button>
        <button className="border p-2" onClick={restart}>
          start again
        </button>
      </div>
    </>
  );
};

export default ScreenFive;
