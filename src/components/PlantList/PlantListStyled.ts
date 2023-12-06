import styled from "styled-components";

const PlantListStyled = styled.ul`
  display: grid;
  grid-template-columns: 300px;
  align-items: start;
  gap: 20px;
  justify-content: center;

  @media (min-width: 686px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
  }
`;

export default PlantListStyled;
