import { fireEvent, screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/CustomRender";
import PlantForm from "./PlantForm";
import userEvent from "@testing-library/user-event";

describe("Given a PlantForm component", () => {
  const submitAction = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show a 'Name:' label text.", () => {
      const expectedLabelText = "Name:";

      customRender(<PlantForm submitAction={submitAction} />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the text 'Upload plant'.", () => {
    const expectedButtonText = "Upload plant";

    customRender(<PlantForm submitAction={submitAction} />);

    const buttonText = screen.getByText(expectedButtonText);

    expect(buttonText).toBeInTheDocument();
  });

  describe("When it is rendered and the user has typed all the required data", () => {
    test("Then it should show the written data in its corresponding input.", async () => {
      const expectedInputText = "Oregano";

      customRender(<PlantForm submitAction={submitAction} />);

      const labelText = screen.getByLabelText("Name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });

  describe("When user clicks/taps on the button 'Upload plant'", () => {
    test("Then it should call the form's submitAction action", () => {
      customRender(<PlantForm submitAction={submitAction} />);

      const plantForm = screen.getByLabelText("Name:");
      fireEvent.submit(plantForm);

      expect(submitAction).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user clicks on the button 'Upload plant'", () => {
    test("Then it should call its submitAction function", async () => {
      customRender(<PlantForm submitAction={submitAction} />);

      const plantForm = screen.getByLabelText("Name:");
      const addPlantButton = screen.getByRole("button", {
        name: "Upload plant",
      });

      await userEvent.click(addPlantButton);

      fireEvent.submit(plantForm);

      expect(submitAction).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user fills every input and clicks the 'Upload plant' button", () => {
    test("Then it should call its submitAction function", async () => {
      const expectedInputText = "Oregano";
      const expectedButtonText = "Upload plant";

      customRender(<PlantForm submitAction={submitAction} />);

      const inputPlantElement = screen.getByLabelText("Name:");
      await userEvent.type(inputPlantElement, expectedInputText);

      const inputScientificNameElement =
        screen.getByLabelText("Scientific name:");
      await userEvent.type(inputScientificNameElement, expectedInputText);

      const inputUseElement = screen.getByLabelText(
        "Use (culinary/medicinal/poison):",
      );
      await userEvent.type(inputUseElement, expectedInputText);

      const inputHabitatElement = screen.getByLabelText("Habitat:");
      await userEvent.type(inputHabitatElement, expectedInputText);

      const inputImageElement = screen.getByLabelText("Image URL:");
      await userEvent.type(inputImageElement, expectedInputText);

      const inputPropertiesElement = screen.getByLabelText("Properties:");
      await userEvent.type(inputPropertiesElement, expectedInputText);
      0;
      const inputHowToElement = screen.getByLabelText("How to use it:");
      await userEvent.type(inputHowToElement, expectedInputText);

      const inputIsPoisonousElement = screen.getByLabelText(
        "If poisonous, how? (optional):",
      );
      await userEvent.type(inputIsPoisonousElement, expectedInputText);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButtonElement);

      expect(submitAction).toHaveBeenCalled();
    });
  });
});
