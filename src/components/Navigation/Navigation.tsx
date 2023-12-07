import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled.js";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/plants">
            <img
              src="images/home.svg"
              alt="Home icon with a house drawing."
              width="50"
              height="50"
            />
          </NavLink>
        </li>
        <li>
          <img
            src="images/pantry.svg"
            alt="Pantry icon with a pantry drawing."
            width="50"
            height="50"
          />
        </li>
        <li>
          <NavLink to="/add">
            <img
              src="images/create.svg"
              alt="Create icon with a plus sign."
              width="50"
              height="50"
            />
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
