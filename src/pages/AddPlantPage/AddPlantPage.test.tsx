import { screen } from "@testing-library/react";
import AddPlantPage from "./AddPlantPage";
import { customRender } from "../../testUtils/CustomRender";

describe("Given an AddPlantPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Can’t find your plant in our inventory? Add it here:'", () => {
      const expectedTitle =
        "Can’t find your plant in our inventory? Add it here:";

      customRender(<AddPlantPage />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Name:' input label.", () => {
      const expectedLabelText = "Name:";

      customRender(<AddPlantPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Upload plant'", () => {
      const expectedButtonText = "Upload plant";

      customRender(<AddPlantPage />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
