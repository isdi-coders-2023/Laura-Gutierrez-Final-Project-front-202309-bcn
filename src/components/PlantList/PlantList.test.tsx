import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import PlantList from "./PlantList";

describe("Given a PlantList component", () => {
  describe("When it receives a list with Oregano and Salvia", () => {
    test("Then it should show Salvia", () => {
      const expectedPlantsLength = 2;

      customRender(<PlantList />);
      const listItemsLength = screen.getAllByRole("heading").length;

      expect(listItemsLength).toBe(expectedPlantsLength);
    });
  });
});
