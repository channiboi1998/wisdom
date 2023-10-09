import { Feeling, Need } from "./enums";

export type Messages = Message[];

export type Message = {
  feeling: Feeling;
  need: Need;
  message: string;
};
