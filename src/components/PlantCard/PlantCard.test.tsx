import { screen, waitFor } from "@testing-library/react";
import { plantsMock } from "../../store/features/plants/mocks/plantsMock";
import { customRender } from "../../testUtils/CustomRender";
import PlantCard from "./PlantCard";
import userEvent from "@testing-library/user-event";

describe("Given a PlantCard component", () => {
  describe("When it receives a 'Oregano' card", () => {
    test("Then it should show 'Oregano' into a heading", () => {
      const expectedHeadingText = plantsMock[0];

      customRender(<PlantCard plant={expectedHeadingText} />);
      const OreganoName = screen.getByRole("heading", {
        name: expectedHeadingText.name,
      });

      expect(OreganoName).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Modify'", () => {
      const expectedButtonText = "Modify";

      customRender(<PlantCard plant={plantsMock[0]} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Delete'", () => {
      const expectedButtonText = "Delete";

      customRender(<PlantCard plant={plantsMock[0]} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });
  });
});

describe("When the card with Oregano is rendered and the user clicks on the button 'Delete'", () => {
  const expectedButtonText = "Delete";

  test("The it should remove the Oregano card", async () => {
    customRender(<PlantCard plant={plantsMock[0]} />);

    const deleteButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    const plantName = screen.getByRole("heading", { name: "Oregano" });

    await userEvent.click(deleteButton);

    waitFor(() => {
      expect(plantName).not.toBeInTheDocument();
    });
  });

  test("Then it should show the positive toastify feedback message 'Plant removed from our inventory!'", async () => {
    customRender(<PlantCard plant={plantsMock[0]} />);

    const deleteButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    await userEvent.click(deleteButton);

    const expectedMessage = "Plant removed from our inventory!";

    expect(screen.getByText(expectedMessage)).toBeInTheDocument();
  });
});
