import { FC } from "react";
import { ButtonType } from "../../types/ButtonType";
import { StyledButton } from "../StyledButton";

export const Button: FC<ButtonType> = ({
  title,
  type = "button",
  disabled = false,
  handler,
  buttonClass,
}) => {
  return (
    <StyledButton
      className={buttonClass}
      onClick={() => handler()}
      disabled={disabled}
      type={type}
    >
      {title}
    </StyledButton>
  )
}
