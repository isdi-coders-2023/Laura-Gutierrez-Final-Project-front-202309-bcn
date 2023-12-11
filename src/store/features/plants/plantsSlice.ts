import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantsStateStructure, PlantsStructure } from "../types";

const initialPlantsSlice: PlantsStateStructure = {
  plants: [],
  selectedPlant: {
    _id: "",
    name: "",
    scientificName: "",
    use: "",
    properties: "",
    howToUse: "",
    imageUrl: "",
    isPoisonous: "",
    habitat: "",
  },
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
    deletePlant: (
      currentState,
      action: PayloadAction<string>,
    ): PlantsStateStructure => ({
      ...currentState,
      plants: currentState.plants.filter(
        (plant) => plant._id !== action.payload,
      ),
    }),
    addNewPlant: (
      currentState,
      action: PayloadAction<PlantsStructure>,
    ): PlantsStateStructure => ({
      ...currentState,
      plants: [...currentState.plants, action.payload],
    }),
    loadSelectedPlant: (
      currentState,
      action: PayloadAction<PlantsStructure>,
    ): PlantsStateStructure => ({
      ...currentState,
      selectedPlant: action.payload,
    }),
  },
});

export const {
  loadPlants: loadPlantsActionCreator,
  deletePlant: deletePlantsActionCreator,
  addNewPlant: addNewPlantActionCreator,
  loadSelectedPlant: loadSelectedPlantActionCreator,
} = plantsSlice.actions;

export const plantsReducer = plantsSlice.reducer;
