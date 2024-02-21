import { styled } from "styled-components";
import { StyledLoaderType } from "../../types/StyledLoaderType";

export const StyledLoader = styled.div<StyledLoaderType>`
width: 250px;
height: 250px;
border-radius: 50%;
position: relative;
background: 
  radial-gradient(closest-side, ${props => props.theme.$background_color} 90%, transparent 90% 100%),
  conic-gradient(
    ${props => props.theme.$accent_color} ${(props) => `${props.progress}%`},
    white 0
  );

  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 52px;
    font-weight: 700;
    font-family: 'Albert Sans';
    color: ${props => props.theme.$text_color};
    transform: translate(-50%, -50%);
  }

  .text {
    position: relative;
    bottom: -110%;
    margin: 0 auto;
    max-width: 70%;
    color: #fff;
    font-size: 17px;
    text-align: center;
  }
`