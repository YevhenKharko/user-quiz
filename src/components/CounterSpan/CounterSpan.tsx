import { styled } from "styled-components";

export const CounterSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 24px;
  font-family: 'Albert Sans';

button {
  color: ${props => props.theme.$text_color};
  background-color: transparent;
  transform: scale(1.75);
  position: relative;
  left: -40%;
  font-weight: 700;
}

span {
  color: ${props => props.theme.$text_color};
  letter-spacing: 2px;
}

.current {
  color: ${props => props.theme.$accent_color};
}
`;