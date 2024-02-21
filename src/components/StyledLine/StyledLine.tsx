import { styled } from "styled-components";
import { StyledLineType } from "../../types/StyledLineType";

export const StyledLine = styled.div<StyledLineType>`
  background-color: ${props => props.theme.$accent_color};
  height: 24px;
  text-align: center;
  line-height: 24px;
  height: 4px;
  transition: 0.4s ease;
  width: ${props => props.percents};
`;