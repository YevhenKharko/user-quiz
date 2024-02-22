import { styled } from "styled-components";
import { sizes } from "../../style/style";

export const StyledQuestion = styled.div`
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
    margin-bottom: 20px;

    @media ${sizes.laptop} { 
      margin-bottom: 40px;
    }
  }
`