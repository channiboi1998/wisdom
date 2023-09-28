"use client";

import { useState } from "react";

enum Feeling {
  HAPPY = "happy",
  SAD = "sad",
}

enum Need {
  AFFIRMATION = "affirmation",
  REFLECTION = "reflection",
}

type Message = {
  id: number;
  feeling: Feeling;
  need: Need;
  message: string;
};

type Messages = Message[];

const dataMessages: Messages = [
  {
    id: 1,
    feeling: Feeling.HAPPY,
    need: Need.AFFIRMATION,
    message: "I choose to focus on the good in every situation.",
  },
  {
    id: 2,
    feeling: Feeling.HAPPY,
    need: Need.AFFIRMATION,
    message: "I am grateful for the abundance in my life.",
  },
  {
    id: 3,
    feeling: Feeling.HAPPY,
    need: Need.AFFIRMATION,
    message: "I radiate happiness and it comes back to me tenfold.",
  },
  {
    id: 4,
    feeling: Feeling.SAD,
    need: Need.AFFIRMATION,
    message:
      "I am not alone; there are people who care about me and want to support me.",
  },
  {
    id: 5,
    feeling: Feeling.SAD,
    need: Need.AFFIRMATION,
    message:
      "I have the power to find moments of peace and joy even in difficult times.",
  },
  {
    id: 6,
    feeling: Feeling.SAD,
    need: Need.AFFIRMATION,
    message:
      "I trust in the process of life, which includes both ups and downs.",
  },
  {
    id: 7,
    feeling: Feeling.HAPPY,
    need: Need.REFLECTION,
    message:
      "Sometimes, the simplest moments are the happiest – like a warm cup of tea on a rainy day or a peaceful sunrise.",
  },
  {
    id: 8,
    feeling: Feeling.HAPPY,
    need: Need.REFLECTION,
    message:
      "I worked hard for this, and I did it. The sense of accomplishment and pride is truly fulfilling.",
  },
  {
    id: 9,
    feeling: Feeling.HAPPY,
    need: Need.REFLECTION,
    message:
      "Knowing that I've made a difference, no matter how small, in someone else's life makes me genuinely happy.",
  },
  {
    id: 10,
    feeling: Feeling.SAD,
    need: Need.REFLECTION,
    message:
      "There were chances I didn't take, and now I wonder if I'll ever get another opportunity. The what-ifs haunt me",
  },
  {
    id: 11,
    feeling: Feeling.SAD,
    need: Need.REFLECTION,
    message:
      "Sometimes I lie awake at night, pondering the meaning of life and our existence. It's a deep and often unsettling reflection.",
  },
  {
    id: 12,
    feeling: Feeling.SAD,
    need: Need.REFLECTION,
    message:
      "The constant struggle to make ends meet can be soul-crushing. It feels like a never-ending cycle of stress and uncertainty.",
  },
];

export default function Home() {
  const [feeling, setFeeling] = useState<Feeling | null>(null);
  const [need, setNeed] = useState<Need | null>(null);

  const selectMessage = (feeling: Feeling, need: Need) => {
    const messages = [...dataMessages];
    const filteredMessages = messages.filter(
      (message: Message) => message.feeling === feeling && message.need === need
    );
    const randomIndex = Math.floor(Math.random() * filteredMessages.length);

    return (
      <>
        <h4 className="text-2xl mb-4">
          {filteredMessages[randomIndex].message}
        </h4>
        <button
          className="border p-2"
          onClick={() => {
            setFeeling(null);
            setNeed(null);
          }}
        >
          again
        </button>
        <a
          className="my-2 underline"
          href="https://beingbakedcookies.ca/"
          target="_blank"
        >
          Buy some cookies
        </a>
      </>
    );
  };

  const screenOne = () => (
    <>
      <h2 className="text-4xl mb-4">How are you feeling today?</h2>
      <div className="flex flex-row items-center justify-center space-x-2">
        {[Feeling.HAPPY, Feeling.SAD].map((feeling: Feeling, index: number) => (
          <button
            key={index}
            onClick={() => setFeeling(feeling)}
            className="border p-2"
          >
            {feeling}
          </button>
        ))}
      </div>
    </>
  );

  const screenTwo = () => {
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

  const screenThree = (feeling: Feeling, need: Need) =>
    selectMessage(feeling, need);

  const screen = (feeling: Feeling | null, need: Need | null) => {
    if (feeling === null && need === null) {
      return screenOne();
    } else if (feeling !== null && !need) {
      return screenTwo();
    } else if (feeling !== null && need !== null) {
      return screenThree(feeling, need);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {screen(feeling, need)}
    </div>
  );
}
