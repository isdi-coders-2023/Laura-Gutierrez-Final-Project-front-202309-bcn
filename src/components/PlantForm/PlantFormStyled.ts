import styled from "styled-components";

const PlantFormStyled = styled.form`
  width: 20.4375rem;
  border-radius: 0.9375rem;
  border: 5px solid ${({ theme }) => theme.colors.darker};
  opacity: 0.95;
  background: ${({ theme }) => theme.colors.main};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  .form {
    &__div {
      display: block;
      margin-bottom: 10px;
      flex-direction: row;
      position: relative;
      align-items: center;
      padding-top: 6px;
    }

    &__input {
      padding: 11px;
      font-size: 1rem;
      display: inline-block;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.lighter};
    }

    &__text-area {
      padding: 11px;
      font-size: 1rem;
      display: inline-block;
      width: 100%;
      height: 10rem;
      background-color: ${({ theme }) => theme.colors.lighter};
    }

    &__label {
      display: inline-block;
      margin-bottom: 5px;
      font-family: ${({ theme }) => theme.typography.secondaryFont};
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.3125rem;
      color: ${({ theme }) => theme.colors.lighter};
    }

    &__button {
      background-color: ${({ theme }) => theme.colors.dark};
      display: flex;
      width: 7.8125rem;
      height: 3.125rem;
      padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border-radius: 0.625rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default PlantFormStyled;
