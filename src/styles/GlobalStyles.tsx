import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  :root {
   --toastify-icon-color-success: ${({ theme }) => theme.colors.lighter};
}

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    background-color: ${({ theme }) => theme.colors.medium};
  }

  h1, h2 {
    margin-top: 0;
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    border: none;
    font: inherit;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    font: inherit;
    padding: 5px;
  }

  img {
    max-width: 100%;
  }

  
`;

export default GlobalStyles;
