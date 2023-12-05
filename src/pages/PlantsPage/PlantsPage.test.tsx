import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlantsPage from "./PlantsPage";
import customRender from "../../testUtils/CustomRender";
import { plantsMock } from "../../mocks/plantsMock";

describe("When recieves a list of Records", () => {
  test("It should show `This is your online inventory of ethnobotanical plants. Mark whether they're in your pantry and learn all about them.` in a heading", () => {
    const expectedHeadingText =
      "This is your online inventory of ethnobotanical plants. Mark whether they're in your pantry and learn all about them.";
    const mockData = plantsMock;

    customRender(<PlantsPage />, mockData);

    const headingElement = screen.getByRole("heading", {
      name: expectedHeadingText,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
