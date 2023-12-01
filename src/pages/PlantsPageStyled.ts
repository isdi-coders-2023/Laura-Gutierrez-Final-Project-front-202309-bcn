import styled from "styled-components";

const PlantsPageStyled = styled.main`
  padding-top: 16px;
  text-align: left;

  .plantsPage-text {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 200;
  }
`;

export default PlantsPageStyled;
