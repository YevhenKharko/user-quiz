import { styled } from "styled-components";
import { QuestionPropsType } from "../../types/QuestionPropsType";

const StyledQuestion = styled.div`
  text-align: center;
  color: ${props => props.theme.$text_color};
  font-family: 'Albert Sans';
  h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 1.5px;
  line-height: 30px;
  }
  h4 {
    color: ${props => props.theme.$text_color};
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin-bottom: 50px;
  }
`

export const Question: React.FC<QuestionPropsType> = ({ question, description }) => {
  return (
    <StyledQuestion>
      {question && <h2>{question}</h2>}
      {!description?.includes('question') ? <h4>{description}</h4> : null}
    </StyledQuestion>
  );
};