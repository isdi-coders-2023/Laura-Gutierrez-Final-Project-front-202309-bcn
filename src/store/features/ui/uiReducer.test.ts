import {
  hideLoadingActionCreator,
  initialUiState,
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
});
