import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "../Button";
import { StyledSuccess } from "../StyledSuccess";

export const Success = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const downloadAnswers = () => {
    const preparedAnswers = Object.values(localStorage).filter(el => !isNaN(+el[0])).sort().map((line) => line.split(', '));

    if (!preparedAnswers.length) {
      setHasError(true);
      return;
    }

    const formattedData = preparedAnswers.map(([order, title, type, ...answers]) => {
      return {
        order,
        title,
        type,
        answer: type === 'multiple' || type === 'bubble' ? answers.join(', ') : answers[0]
      };
    });
    
    const csvString = `order,title,type,answer\n${formattedData
      .map(({ order, title, type, answer }) => {
        const escapedAnswer = `"${answer.replace(/"/g, '""')}"`;
        return `${order},${title},${type},${escapedAnswer}`;
      })
      .join('\n')}`;
    
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'quiz-answers.csv'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const restartQuiz = () => {
    localStorage.clear();
    navigate('/quiz/1')
  };
  
  return (
    <StyledSuccess>
      <div className="headers">
        <h2>{t('success_thanks')}</h2>
        <h3>{t('success_sub_text')}</h3>
      </div>
      <span className="circle"></span>
      <Button title={hasError ? t('error') : t('button_success_download')} handler={downloadAnswers} buttonClass={hasError ? "error" : "download"}></Button>
      <Button title={t('button_success')} handler={restartQuiz}></Button>
    </StyledSuccess>
  )
}