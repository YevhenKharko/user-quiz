import { css, styled } from "styled-components";
import { StyledOptionType } from "../../types/StyledOptionType";

export const StyledList = styled.ul<StyledOptionType>`
display: flex;
gap: 20px;
flex-direction: column;
justify-content: center;
align-items: center;

${props =>
    props.alignment === 'row' &&
    css`
  flex-direction: row;
`}

${props =>
    props.alignment === 'bubble' &&
    css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  :nth-child(2), :nth-child(5) {
    transform: translateY(20px) scale(1);
  }

  :nth-child(2):hover, :nth-child(5):hover {
    transform: translateY(20px) scale(1.05);
  }
`}
`