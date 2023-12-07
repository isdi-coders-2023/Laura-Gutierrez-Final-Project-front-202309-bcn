import { UiStructure } from "./types";
import {
  hideErrorActionCreator,
  hideLoadingActionCreator,
  initialUiState,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading slice", () => {
  describe("When it receives a currentUiState with the property isLoading set to 'false'", () => {
    test("Then it should change it to 'true'", () => {
      const isLoadingFalse = uiReducer(
        initialUiState,
        showLoadingActionCreator(),
      );
      const isLoadingTrue = { ...initialUiState, isLoading: true };

      expect(isLoadingFalse).toStrictEqual(isLoadingTrue);
    });
  });
});

describe("Given a hideLoading slice", () => {
  describe("When it receives a currentUiState with the property isLoading set to 'true'", () => {
    test("Then it should change it to 'false'", () => {
      const isLoadingTrue = uiReducer(
        initialUiState,
        hideLoadingActionCreator(),
      );
      const isLoadingFalse = { ...initialUiState, isLoading: false };

      expect(isLoadingTrue).toStrictEqual(isLoadingFalse);
    });
  });

  describe("When it receives an initial state of false and an action creator of showError", () => {
    test("Then it should return the new state with true", () => {
      const initialUiState: UiStructure = {
        isError: false,
        isLoading: false,
      };

      const newUiState = uiReducer(initialUiState, showErrorActionCreator());

      expect(newUiState.isError).toBeTruthy();
    });
  });

  describe("When it receives an initial state of true and an action creator of hideError", () => {
    test("Then it should return the new state with false", () => {
      const initialUiState: UiStructure = {
        isError: true,
        isLoading: false,
      };

      const newUiState = uiReducer(initialUiState, hideErrorActionCreator());

      expect(newUiState.isError).toBeFalsy();
    });
  });
});
