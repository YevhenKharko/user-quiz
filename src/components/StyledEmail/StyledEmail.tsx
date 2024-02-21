import { styled } from "styled-components";

export const StyledEmail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 56px;
padding-top: 120px;
color: #b6B8C3;

.title {
text-align: center;
font-size: 15px;

h2 {
  font-family: 'Albert Sans';
  color: ${props => props.theme.$text_color};
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
}
}

input {
height: 75px;
border-radius: 16px;
padding: 25px 0 25px 20px;
font-size: 17px;
background-color: ${props => props.theme.$option_background_color};
color: ${props => props.theme.$text_color};
}

h4 {
font-size: 14px;
margin: 0 auto;
max-width: 80%;
text-align: center;
}

.button {
height: 56px;
border-radius: 1000px;
background-color: ${props => props.theme.$accent_color};
width: 100%;
justify-content: space-between;
color: ${props => props.theme.$text_color};
font-weight: 700;
font-size: 24px;
position: absolute;
bottom: 5vh;
width: calc(${props => props.theme.$width} - 40px);

&:disabled {
  background-color: ${props => props.theme.$option_background_active_color};
  cursor: not-allowed;
}
}
`