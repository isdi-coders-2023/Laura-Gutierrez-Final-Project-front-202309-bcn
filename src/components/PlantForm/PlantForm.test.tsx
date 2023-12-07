import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/CustomRender";
import PlantForm from "./PlantForm";
import userEvent from "@testing-library/user-event";

describe("Given a PlantForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Name:' label text.", () => {
      const expectedLabelText = "Name:";

      customRender(<PlantForm />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the text 'Upload plant'.", () => {
    const expectedButtonText = "Upload plant";

    customRender(<PlantForm />);

    const buttonText = screen.getByText(expectedButtonText);

    expect(buttonText).toBeInTheDocument();
  });

  describe("When it is rendered and the user has typed all the required data", () => {
    test("Then it should show the written data in its corresponding input.", async () => {
      const expectedInputText = "Oregano";

      customRender(<PlantForm />);

      const labelText = screen.getByLabelText("Name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });
});