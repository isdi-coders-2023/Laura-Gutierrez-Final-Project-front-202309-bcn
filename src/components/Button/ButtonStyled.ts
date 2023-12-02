import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  width: 5.9375rem;
  height: 2.5625rem;
  padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &.pantry {
    width: 3.4375rem;
    height: 3.4375rem;
    background-image: url(https://i.ibb.co/h8nV3Y4/try4.webp);
  }
`;

export default ButtonStyled;
