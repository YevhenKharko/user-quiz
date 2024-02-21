import { AnswerType } from "./AnswerType";
import { QuestionType } from "./QuestionType";

export type OptionsListType = {
  answer: AnswerType;
  setCurrentLanguage(value: string): void;
  currentQuestion: QuestionType;
};