import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 10px;
  height: 100vh;
  width: 100vw;
  .loading {
    &__image {
      width: 9.375rem;
      height: 13.21025rem;
      border-radius: 0.625rem;
      margin-top: 100px;
      object-fit: contain;
    }
  }
`;

export default LoadingStyled;
