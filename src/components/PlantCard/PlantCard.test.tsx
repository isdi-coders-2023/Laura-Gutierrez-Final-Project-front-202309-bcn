import { screen, waitFor } from "@testing-library/react";
import { plantsMock } from "../../mocks/plantsMock";
import customRender from "../../testUtils/CustomRender";
import PlantCard from "./PlantCard";
import userEvent from "@testing-library/user-event";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";

describe("Given a PlantCard component", () => {
  describe("When it receives a 'Oregano' card", () => {
    test("Then it should show 'Oregano' into a heading", () => {
      const expectedHeadingText = plantsMock[0];
      const mockData = plantsMock;

      customRender(<PlantCard plant={expectedHeadingText} />, mockData);
      const OreganoName = screen.getByRole("heading", {
        name: expectedHeadingText.name,
      });

      expect(OreganoName).toBeInTheDocument();
    });
  });

  describe("When the card with Oregano is rendered and the user clicks on the button 'Delete'", () => {
    const expectedButtonText = "Delete";

    test("The it should remove the Oregano card", async () => {
      const mockData = plantsMock;

      customRender(<PlantCard plant={plantsMock[0]} />, mockData);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const plantName = screen.getByRole("heading", { name: "Oregano" });
      await userEvent.click(deleteButton);
      waitFor(() => {
        expect(plantName).not.toBeInTheDocument();
      });
    });

    test("Then it should show the positive feedback message 'Plant removed from our inventory!'", async () => {
      const expectedMessage = "Plant removed from our inventory!";
      const mockData = plantsMock;

      customRender(<PlantCard plant={plantsMock[0]} />, mockData);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      expect(screen.getByText(expectedMessage)).toBeInTheDocument();
    });

    test("Then it should show the negative feedback message 'Error: Couldn’t remove plant. Please try again.'", async () => {
      const expectedErrorMessage =
        "Error: Couldn’t remove plant. Please try again.";
      const mockData = plantsMock;

      server.use(...errorHandlers);

      customRender(<PlantCard plant={plantsMock[0]} />, mockData);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      await waitFor(() => {
        expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
      });
    });
  });
});
