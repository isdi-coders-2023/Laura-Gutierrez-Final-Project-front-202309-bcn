import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { plantsReducer } from "./features/plants/plantsSlice";

export const store = configureStore({
  reducer: {
    plantsState: plantsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
