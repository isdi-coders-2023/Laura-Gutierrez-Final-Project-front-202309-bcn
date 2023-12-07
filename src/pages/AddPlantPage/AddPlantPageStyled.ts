import styled from "styled-components";

const AddPlantPageStyled = styled.main`
  padding-top: 16px;
  text-align: left;
  padding: 10px;

  .page {
    display: flex;
    justify-content: center;
  }

  .page-text {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.3125rem;
    padding-bottom: 1rem;
  }
`;

export default AddPlantPageStyled;
