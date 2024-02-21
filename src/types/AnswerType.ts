import { SingleOptionType } from "./SingleOptionType";

export type AnswerType = {
  id: number;
  type: "single" | "multiple" | "language" | "bubble";
  alignment: "row" | "column" | "bubble";
  options: SingleOptionType[]
};