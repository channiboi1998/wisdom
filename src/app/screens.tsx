"use client";

import React from "react";
import { useMessageStore } from "../../zustand/messages";
import { Screen } from "../../helpers/enums";
import ScreenOne from "./screen-one";
import ScreenTwo from "./screen-two";
import ScreenThree from "./screen-three";
import ScreenFour from "./screen-four";

const Screens = () => {
  const { currentScreen, setFeeling } = useMessageStore();

  switch (currentScreen) {
    case Screen.ONE:
      return <ScreenOne setFeeling={setFeeling} />;
    case Screen.TWO:
      return <ScreenTwo />;
    case Screen.THREE:
      return <ScreenThree />;
    case Screen.FOUR:
      return <ScreenFour />;
    default:
      return null;
  }
};

export default Screens;
