import { Feeling, Need } from "./helpers/enums";
import { Messages } from "./helpers/models";

export const data: Messages = [
  // LONELY > AFFIRMATION
  {
    feeling: Feeling.LONELY,
    need: Need.AFFIRMATION,
    message: "Test Message: LONELY > AFFIRMATION > Message 1",
  },
  {
    feeling: Feeling.LONELY,
    need: Need.AFFIRMATION,
    message: "Test Message: LONELY > AFFIRMATION > Message 2",
  },
  {
    feeling: Feeling.LONELY,
    need: Need.AFFIRMATION,
    message: "Test Message: LONELY > AFFIRMATION > Message 3",
  },
  // LONELY > REFLECTION
  {
    feeling: Feeling.LONELY,
    need: Need.REFLECTION,
    message: "Test Message: LONELY > REFLECTION > Message 1",
  },
  {
    feeling: Feeling.LONELY,
    need: Need.REFLECTION,
    message: "Test Message: LONELY > REFLECTION > Message 2",
  },
  {
    feeling: Feeling.LONELY,
    need: Need.REFLECTION,
    message: "Test Message: LONELY > REFLECTION > Message 3",
  },
  // WORRIED > AFFIRMATION
  {
    feeling: Feeling.WORRIED,
    need: Need.AFFIRMATION,
    message: "Test Message: WORRIED > AFFIRMATION > Message 1",
  },
  {
    feeling: Feeling.WORRIED,
    need: Need.AFFIRMATION,
    message: "Test Message: WORRIED > AFFIRMATION > Message 2",
  },
  {
    feeling: Feeling.WORRIED,
    need: Need.AFFIRMATION,
    message: "Test Message: WORRIED > AFFIRMATION > Message 3",
  },
  // WORRIED > REFLECTION
  {
    feeling: Feeling.WORRIED,
    need: Need.REFLECTION,
    message: "Test Message: WORRIED > REFLECTION > Message 1",
  },
  {
    feeling: Feeling.WORRIED,
    need: Need.REFLECTION,
    message: "Test Message: WORRIED > REFLECTION > Message 2",
  },
  {
    feeling: Feeling.WORRIED,
    need: Need.REFLECTION,
    message: "Test Message: WORRIED > REFLECTION > Message 3",
  },
];
