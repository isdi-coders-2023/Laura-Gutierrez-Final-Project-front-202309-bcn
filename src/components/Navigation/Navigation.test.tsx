import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Home icon with the alternative text 'Home icon with a house drawing.'", () => {
      const expectedHomeAltText = "Home icon with a house drawing.";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationHomeLink = screen.getByRole("link", {
        name: expectedHomeAltText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a Create icon with the alternative text 'Create icon with a plus sign.'", () => {
      const expectedCreateAltText = "Create icon with a plus sign.";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationAddPlantLink = screen.getByRole("link", {
        name: expectedCreateAltText,
      });

      expect(navigationAddPlantLink).toBeInTheDocument();
    });
  });
});
