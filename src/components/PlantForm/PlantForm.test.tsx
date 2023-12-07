import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/CustomRender";
import PlantForm from "./PlantForm";

describe("Given a PlantForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Name:' label text.", () => {
      const expectedLabelText = "Name:";

      customRender(<PlantForm />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });

  describe("when it's rendered", () => {
    test("Then it should show a button with the text 'Upload plant'.", () => {
      const expectedButtonText = "Upload plant";

      customRender(<PlantForm />);

      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
