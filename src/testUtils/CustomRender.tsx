import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme.js";
import GlobalStyles from "../styles/GlobalStyles";
import { plantsMock } from "../store/features/plants/mocks/plantsMock.js";
import { plantsReducer } from "../store/features/plants/plantsSlice";
import { uiReducer } from "../store/features/ui/uiSlice";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { store } from "../store/index.js";
import { plantMock } from "../store/features/plants/mocks/plantMock.js";

export const getMockStore = () => {
  const mockStore = configureStore({
    reducer: { plantsState: plantsReducer, uiState: uiReducer },
    preloadedState: {
      plantsState: { plants: plantsMock, selectedPlant: plantMock },
      uiState: { isLoading: false },
    },
  });

  return mockStore;
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export const customRender = (children: React.ReactElement) => {
  const mockStore = getMockStore();

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <GlobalStyles />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const customRenderWithoutBrowserRouter = (
  children: React.ReactElement,
) => {
  const mockstore = getMockStore();

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Provider store={mockstore}>{children}</Provider>
    </ThemeProvider>,
  );
};
