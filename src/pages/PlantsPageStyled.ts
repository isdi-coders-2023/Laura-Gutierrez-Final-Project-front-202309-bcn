import styled from "styled-components";

const PlantsPageStyled = styled.main`
  padding-top: 16px;
  text-align: left;

  .plantspage-text {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 300;
    font-size: 1.25rem;
  }
`;

export default PlantsPageStyled;
