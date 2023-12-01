import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Herbolarium logo with a cauldrum and herbs' logo", () => {
      const expectedAltText = "Herbolarium logo with a cauldrum and herbs";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
