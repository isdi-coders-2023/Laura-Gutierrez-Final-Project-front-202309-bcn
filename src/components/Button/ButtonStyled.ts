import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  width: 4.9375rem;
  height: 2.5625rem;
  padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: ${({ theme }) => theme.typography.mainFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;

  &.plant-card__pantry {
    margin-top: 1rem;
    width: 50px;
    height: 50px;
    background-image: url("https://raw.githubusercontent.com/isdi-coders-2023/Laura-Gutierrez-Final-Project-front-202309-bcn/ae9ce765033e9f7c4cb33ebf0d32eddc0e14fc6b/public/images/pantry.svg");
  }
`;

export default ButtonStyled;
