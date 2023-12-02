import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img
        className="header-image"
        src="images/header3.jpg"
        alt="Herbolarium logo with a cauldrum and herbs"
        title="Herbolarium"
        width="500"
        height="170"
      />
    </HeaderStyled>
  );
};

export default Header;
