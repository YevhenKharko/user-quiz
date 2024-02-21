import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { ProgressBar } from "../ProgressBar";
import { OptionsList } from "../OptionsList";

import questions from '../../data/questions.json';
import answers from '../../data/answers.json';

import { AnswerType } from "../../types/AnswerType";

export const Quiz = ({ setCurrentLanguage }: { setCurrentLanguage: (language: string) => void }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const { questionId } = useParams();
  const question = questions.find((q) => q.id === currentQuestionId) || questions[0];
  const answer = answers.find((ans) => ans.id === currentQuestionId) || answers[0];

  useEffect(() => {
    setCurrentQuestionId(+questionId!);
  }, [questionId])

  return (
    <>
      <ProgressBar currentQuestionId={question.id} totalQuestions={questions.length}></ProgressBar>
      <OptionsList answer={answer as AnswerType} setCurrentLanguage={setCurrentLanguage} currentQuestion={question}/>
    </>
  )
}