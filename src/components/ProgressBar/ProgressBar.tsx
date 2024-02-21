import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBarType } from "../../types/ProgressBarType";
import { styled } from "styled-components";
import { CounterSpan } from "../CounterSpan/CounterSpan";
import { StyledBar } from "../StyledBar";
import { StyledLine } from "../StyledLine";

const StyledBarWrapper = styled.div`
  padding: 5vh 0;
`;

export const ProgressBar: FC<ProgressBarType> = ({ currentQuestionId, totalQuestions }) => {
  const navigate = useNavigate();
  const percentage = `${(currentQuestionId / totalQuestions * 100) - 15}%`;
  const [fullness, setFullness] = useState('10%');

  useEffect(() => {
    setFullness(percentage);
  }, [percentage])

  return (
    <StyledBarWrapper>
       <CounterSpan>
        {currentQuestionId >= 3 && <button onClick={() => navigate(`/user-quiz/quiz/${currentQuestionId - 1}`)}>{'<'}</button>}
        <span className="current">{currentQuestionId}</span>
        <span>/</span>
        <span>{totalQuestions}</span>
      </CounterSpan>
      <StyledBar>
        <StyledLine percents={fullness}>
        </StyledLine>
      </StyledBar>
    </StyledBarWrapper>
  );
};
