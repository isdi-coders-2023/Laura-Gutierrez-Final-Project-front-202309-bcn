import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <img
        src="images/loading.webp"
        alt="loading message with a celtic mortar drawing"
        className="loading__image"
        width="250"
        height="250"
      />
    </LoadingStyled>
  );
};

export default Loading;
