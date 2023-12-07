import { screen } from "@testing-library/react";
import AddPlantPage from "./AddPlantPage";
import customRender from "../../testUtils/CustomRender";
import { plantsMock } from "../../store/features/plants/mocks/plantsMock";

describe("Given an AddPlantPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Can’t find your plant in our inventory? Add it here:'", () => {
      const expectedTitle =
        "Can’t find your plant in our inventory? Add it here:";

      customRender(<AddPlantPage />, plantsMock);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
