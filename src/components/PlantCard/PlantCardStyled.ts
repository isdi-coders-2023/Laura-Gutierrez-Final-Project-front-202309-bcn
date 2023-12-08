import styled from "styled-components";

const PlantCardStyled = styled.article`
  display: flex;
  height: 27.125rem;
  align-items: center;
  border-radius: 2rem;
  border: 0.2px solid ${({ theme }) => theme.colors.dark};
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;

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
    display: flex;
    height: 10.375rem;
    justify-content: center;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    background: ${({ theme }) => theme.colors.dark};
    background-size: cover;
  }

  .plant-card__image {
    max-width: 60%;
    max-height: 100%;
    object-fit: cover;
    align-items: center;
  }
`;

export default PlantCardStyled;
