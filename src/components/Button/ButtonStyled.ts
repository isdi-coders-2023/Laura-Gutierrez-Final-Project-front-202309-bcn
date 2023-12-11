import styled from "styled-components";

const ButtonStyled = styled.button`
  margin-top: 1rem;
  display: flex;
  width: 4.9375rem;
  height: 2.5625rem;
  padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: ${({ theme }) => theme.typography.mainFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;

  &.__pantry {
    margin-top: 1rem;
    width: 50px;
    height: 50px;
    padding: 0px;
  }
`;

export default ButtonStyled;
