import { screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutBrowserRouter,
} from "../../testUtils/CustomRender";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show Herbolarium's logo with the alternative text 'Herbolarium logo with a cauldrum and herbs'", () => {
      const expectedAltText = "Herbolarium logo with a cauldrum and herbs";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a PlantsPage /plants path", () => {
    test("Then it should show the text 'This is your online inventory of ethnobotanical plants. Mark whether they're in your pantry and learn all about them.' in a heading", () => {
      const expectedHeadingText =
        "This is your online inventory of ethnobotanical plants. Mark whether they're in your pantry and learn all about them.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/plants"]}>
          <App />
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show the text 'Oregano' in a heading", () => {
    const expectedHeadingtext = "Oregano";

    customRenderWithoutBrowserRouter(
      <MemoryRouter initialEntries={["/plants"]}>
        <App />
      </MemoryRouter>,
    );

    const heading = screen.getByRole("heading", {
      name: expectedHeadingtext,
    });

    expect(heading).toBeInTheDocument();
  });
});
