import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Herbolarium logo with a cauldrum and herbs'", () => {
      const expectedAltText = "Herbolarium logo with a cauldrum and herbs";

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
