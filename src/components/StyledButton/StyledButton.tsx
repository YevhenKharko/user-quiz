import { styled } from "styled-components";
import icon from '../../img/icons/download.png';

export const StyledButton = styled.button`
  height: 56px;
  border-radius: 1000px;
  background-color: ${props => props.theme.$accent_color};
  width: 100%;
  justify-content: space-between;
  color: ${props => props.theme.$text_color};
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 24px;
  position: absolute;
  bottom: 5vh;
  width: calc(${props => props.theme.$width} - 40px);
  transition: transform 0.4s ease, border 0.4s ease;

  &.download {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    height: 50px;
    bottom: 20vh;
    background: transparent;
    border: 1px solid transparent;
    transition: border 0.4s ease;
    font-weight: 400;

    &:after{
      content: '';
      position: relative;
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-position: center center;
      height: 42px;
      width: 42px;
    }

    &:hover {
      border: 1px solid ${props => props.theme.$accent_color};
    }
  }

  &.error {
    border: 1px solid red;
    bottom: 20vh;
    font-size: 15px;
    color: red;
    background: transparent;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.01);
    border: 1px solid #fff;
  }

  &:disabled {
    background-color: ${props => props.theme.$option_background_active_color};
    cursor: not-allowed;
  }
`