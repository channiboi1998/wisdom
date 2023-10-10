"use client";

import React, { useEffect } from "react";
import { useMessageStore } from "../../zustand/messages";
import { Screen } from "../../helpers/enums";
import ScreenOne from "./screen-one";
import ScreenTwo from "./screen-two";
import ScreenThree from "./screen-three";
import ScreenFour from "./screen-four";
import ScreenFive from "./screen-five";
import useContentFul from "../../contentful";

const Screens = () => {
  const {
    currentScreen,
    setFeeling,
    feeling,
    need,
    setNeed,
    setCurrentScreen,
    restart,
  } = useMessageStore();

  const { fetchMessages } = useContentFul();

  useEffect(() => {
    fetchMessages().then((res) => console.log(res));
  }, [fetchMessages]);

  switch (currentScreen) {
    case Screen.ONE:
      return (
        <ScreenOne
          setCurrentScreen={setCurrentScreen}
          selectedFeeling={feeling}
          setFeeling={setFeeling}
        />
      );
    case Screen.TWO:
      return (
        <ScreenTwo
          feeling={feeling}
          selectedNeed={need}
          setNeed={setNeed}
          setCurrentScreen={setCurrentScreen}
        />
      );
    case Screen.THREE:
      return (
        <ScreenThree
          setCurrentScreen={setCurrentScreen}
          feeling={feeling}
          need={need}
        />
      );
    case Screen.FOUR:
      return <ScreenFour setCurrentScreen={setCurrentScreen} />;
    case Screen.FIVE:
      return (
        <ScreenFive restart={restart} setCurrentScreen={setCurrentScreen} />
      );
    default:
      return null;
  }
};

export default Screens;
