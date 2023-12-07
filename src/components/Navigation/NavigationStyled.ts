import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    border-radius: 0rem 0rem 0.9375rem 0.9375rem;
    border: 5px solid #6b6549;
    background-color: ${({ theme }) => theme.colors.darker};
    display: flex;
    width: 100%;
    height: 5rem;
    padding-top: 8px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export default NavigationStyled;
