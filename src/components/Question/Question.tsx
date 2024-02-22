import { QuestionPropsType } from "../../types/QuestionPropsType";
import { StyledQuestion } from "../StyledQuestion";

export const Question: React.FC<QuestionPropsType> = ({ question, description }) => {
  return (
    <StyledQuestion>
      {question && <h2>{question}</h2>}
      {!description?.includes('question') ? <h4>{description}</h4> : null}
    </StyledQuestion>
  );
};