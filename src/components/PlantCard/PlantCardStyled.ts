import styled from "styled-components";

const PlantCardStyled = styled.article`
  gap: 1rem;
  display: flex;
  width: 21.4375rem;
  height: 24.125rem;
  margin-left: 2rem;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.medium};
  flex-direction: column;
  justify-content: space-around;

  .plant-card__button-container {
    display: grid;
    justify-items: center;
    justify-content: end;
    align-items: stretch;
    align-content: center;
    grid-gap: 1rem;
  }

  .plant-card__large-buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: ${({ theme }) => theme.typography.mainFont};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .plant-card__image-container {
    height: 10.375rem;
    align-self: stretch;
    border-radius: 0.125rem;
    background: ${({ theme }) => theme.colors.dark};
    background-size: cover;
  }

  .plant-card__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export default PlantCardStyled;
