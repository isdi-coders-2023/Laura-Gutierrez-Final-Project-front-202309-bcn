import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  width: 5.9375rem;
  height: 2.5625rem;
  padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  .pantry {
    width: 3.4375rem;
    height: 3.4375rem;
    background-image: "images/pantry.svg";
  }
`;

export default ButtonStyled;
