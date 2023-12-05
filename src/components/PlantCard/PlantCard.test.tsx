import { screen } from "@testing-library/react";
import { plantsMock } from "../../mocks/plantsMock";
import customRender from "../../testUtils/CustomRender";
import PlantCard from "./PlantCard";

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
});
