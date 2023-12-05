import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme.js";
import GlobalStyles from "../styles/GlobalStyles";
import { plantsMock } from "../mocks/plantsMock";
import { plantsReducer } from "../store/features/plants/plantsSlice";
import { uiReducer } from "../store/features/ui/uiSlice";
import { PropsWithChildren } from "react";
import { PlantsStructure } from "../store/features/types.js";

const customRender = (
  children: React.ReactElement,
  mockData: PlantsStructure[],
) => {
  const mockStore = configureStore({
    reducer: { plantsState: plantsReducer, uiState: uiReducer },
    preloadedState: {
      plantsState: { plants: mockData },
      uiState: { isLoading: false },
    },
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

export const providerWrapper = ({ children }: PropsWithChildren) => {
  const mockStore = configureStore({
    reducer: { plantsState: plantsReducer },
    preloadedState: { plantsState: { plants: plantsMock } },
  });

  return <Provider store={mockStore}>{children}</Provider>;
};

export const customRenderWithoutRouter = (
  children: React.ReactElement,
  mockData: PlantsStructure[],
) => {
  const mockStore = configureStore({
    reducer: { plantsState: plantsReducer, uiState: uiReducer },
    preloadedState: {
      plantsState: { plants: mockData },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};

export default customRender;
