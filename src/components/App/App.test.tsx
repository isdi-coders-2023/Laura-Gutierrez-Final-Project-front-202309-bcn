import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import App from "./App";
import { plantsMock } from "../../mocks/plantsMock";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Herbolarium logo with a cauldrum and herbs' logo", () => {
      const expectedAltText = "Herbolarium logo with a cauldrum and herbs";
      const mockData = plantsMock;

      customRender(<App />, mockData);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
