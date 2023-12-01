import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyles from "../styles/GlobalStyles";
import { plantsMock } from "../mocks/plantsMock";
import { plantsReducer } from "../store/features/plants/plantsSlice";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { plantsState: plantsReducer },
    preloadedState: { plantsState: { plants: plantsMock } },
  });

  render(
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
