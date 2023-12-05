import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import PlantList from "./PlantList";
import { plantsMock } from "../../mocks/plantsMock";

describe("Given a PlantList component", () => {
  describe("When it receives a list with Oregano and Salvia", () => {
    test("Then it should show Salvia", () => {
      const expectedPlantsLength = 2;
      const mockData = plantsMock;

      customRender(<PlantList />, mockData);
      const listItemsLength = screen.getAllByRole("heading").length;

      expect(listItemsLength).toBe(expectedPlantsLength);
    });
  });
});
