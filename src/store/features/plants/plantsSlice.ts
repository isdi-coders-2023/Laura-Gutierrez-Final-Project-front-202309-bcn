import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantsStateStructure, PlantsStructure } from "../types";

const initialPlantsSlice: PlantsStateStructure = {
  plants: [],
};

const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsSlice,
  reducers: {
    loadPlants: (
      currentState,
      action: PayloadAction<PlantsStructure[]>,
    ): PlantsStateStructure => ({
      ...currentState,
      plants: action.payload,
    }),
  },
});

export const { loadPlants: loadPlantsActionCreator } = plantsSlice.actions;
export const plantsReducer = plantsSlice.reducer;
