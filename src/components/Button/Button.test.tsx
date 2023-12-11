import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/CustomRender";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives the text 'Modify'", () => {
    test("Then it should show the text 'Modify'", () => {
      const expectedButtonText = "Modify";

      customRender(<Button children={expectedButtonText} type="button" />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a text 'Delete'", () => {
    test("Then it should show the text 'Delete'", () => {
      const expectedDeleteButtonText = "Delete";

      customRender(
        <Button children={expectedDeleteButtonText} type={"button"} />,
      );

      const button = screen.getByRole("button", {
        name: expectedDeleteButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives the action delete and a click from a user", () => {
    test("Then it should call the received function", async () => {
      const deleteActionMock = vi.fn();
      const expectedButtonText = "delete";

      customRender(
        <Button
          children={expectedButtonText}
          actionOnClick={deleteActionMock}
          type={"submit"}
        />,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(deleteActionMock).toHaveBeenCalledOnce();
    });
  });
});
