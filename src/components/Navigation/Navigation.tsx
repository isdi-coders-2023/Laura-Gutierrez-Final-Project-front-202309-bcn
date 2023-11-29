import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/plants/">
            <img
              src="./images/home.svg"
              alt="Home icon with a house drawing."
            />
          </NavLink>
        </li>
        <li>
          <img
            src="./images/pantry.svg"
            alt="Pantry icon with a pantry drawing."
          />
        </li>
        <li>
          <NavLink to="/plants/add">
            <img
              src="./images/create.svg"
              alt="Create icon with a plus sign."
            />
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
