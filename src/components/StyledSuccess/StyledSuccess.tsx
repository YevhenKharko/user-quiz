import { styled } from "styled-components";

export const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  text-align: center;
  align-items: center;
  height: 100vh;
  font-family: "Albert Sans";

  .headers {
    font-size: 17px;
    color: ${props => props.theme.$text_color};
    margin-bottom: 60px;

    h2 {
      font-family: "Niconne";
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 20px;
    }

    h3 {
      font-weight: 700;
    }
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #c6ecbd;

    &:after {
      content: '✓';
      position: absolute;
      font-size: 70px;
      font-weight: 700;
      color: #259b25;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
}
`