import styled from "styled-components";

const PlantsPageStyled = styled.main`
  padding-top: 16px;
  text-align: left;
  padding: 10px;

  .plantspage-text {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.3125rem;
  }
`;

export default PlantsPageStyled;
