import styled from "styled-components";

const PlantCardStyled = styled.article`
  display: flex;
  width: 21.4375rem;
  height: 24.125rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 1px solid var(--ink-gray, #bebab3);

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

  .plant-card__image {
    height: 10.375rem;
    align-self: stretch;
    border-radius: 0.125rem;
    background: lightgray 50% / cover no-repeat;
  }
`;

export default PlantCardStyled;
