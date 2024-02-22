import { css, styled } from "styled-components";
import { StyledOptionType } from "../../types/StyledOptionType";

export const StyledOption = styled.li<StyledOptionType>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60px;
  background-color: ${props => props.theme.$option_background_color};
  color: ${props => props.theme.$text_color};
  padding: 20px 18px;
  font-weight: 300;
  font-size: 24px;
  border-radius: 16px;
  font-family: 'Albert Sans';
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.4s ease, background-color 0.4s ease , scale 0.4s ease;

  &:hover {
    border: 1px solid ${props => props.theme.$accent_color};
    background-color: ${props => props.theme.$option_background_active_color};
  }

  ${(props) =>
    props.active && 
    css`
      background-color: ${props => props.theme.$option_background_active_color};
      border: 1px solid ${props => props.theme.$accent_color};
    `}

  ${(props) =>
    props.alignment === 'row' && props.type === 'single' &&
    css`
      width: 100px;
      height: 145px;
      gap: 10px;
    `}
  
  ${(props) =>
    props.alignment === 'bubble' && props.type === 'bubble' &&
    css`
        text-align: center;
        font-size: 14px;
        width: 88px;
        height: 88px;
        border-radius: 50%;
        transform: scale(1);
        padding: 0;
        gap: 6px;
        place-self: center;

        &:hover,
        &:active {
          transform: scale(1.05)
        }
      `}

  ${(props) =>
    props.type === 'multiple' &&
    css`
      justify-content: space-between;
      flex-direction: row;
      .checkbox {
        display: none;

        & + label {
          position: relative;
          cursor: pointer;
          display: inline-block;
          width: 23px;
          height: 23px;
          border-radius: 8px;
          background-color: ${props => props.theme.$checkbox_background_color};

          &::after {
            content: '✔';
            color: ${props => props.theme.$white_color};
            position: absolute;
            top: 50%;
            font-size: 16px;
            font-weight: 300;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 23px;
            height: 23px;
            border-radius: 8px;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
        }

        &:checked + label::after {
          background-color: #e4229c;
          opacity: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `}
`;