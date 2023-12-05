import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import Button from "./Button";
import { plantsMock } from "../../mocks/plantsMock";

describe("Given a Button component", () => {
  describe("When it receives the text 'Modify'", () => {
    test("Then it should show the text 'Modify'", () => {
      const expectedButtonText = "Modify";
      const mockData = plantsMock;

      customRender(
        <Button text={expectedButtonText} type="button" />,
        mockData,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
