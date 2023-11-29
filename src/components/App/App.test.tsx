import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Herbolarium'", () => {
      const expectedHeadingText = "Herbolarium";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const currentHeadingText = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(currentHeadingText).toBeInTheDocument();
    });
  });
});
