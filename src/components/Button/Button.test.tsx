import { screen } from "@testing-library/react";
import customRender from "../../testUtils/CustomRender";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Modify'", () => {
    test("Then it should show the text 'Modify'", () => {
      const expectedButtonText = "Modify";

      customRender(
        <Button text={expectedButtonText} type="button" classModifier="" />,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
