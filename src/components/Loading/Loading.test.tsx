import { screen } from "@testing-library/react";
import Loading from "./Loading";
import customRender from "../../testUtils/CustomRender";
import { plantsMock } from "../../store/features/plants/mocks/plantsMock";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'loading message with a celtic mortar drawing' in the alt image text", () => {
      const expectedAltText = "loading message with a celtic mortar drawing";
      const mockList = plantsMock;

      customRender(<Loading />, mockList);
      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
