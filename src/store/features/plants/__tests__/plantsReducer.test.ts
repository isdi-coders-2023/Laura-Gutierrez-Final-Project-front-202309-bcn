import { plantsMock } from "../mocks/plantsMock";
import {
  plantsReducer,
  loadPlantsActionCreator,
  loadSelectedPlantActionCreator,
} from "../plantsSlice";
import { PlantsStateStructure } from "../../types";
import { plantMock } from "../mocks/plantMock";

describe("Given a plantsReducer", () => {
  describe("When it receives an empty list of plants", () => {
    test("Then it should return a list with the plants Oregano and Salvia", () => {
      const plantsList = plantsMock;
      const currentListState: PlantsStateStructure = {
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

      const newListState = plantsReducer(
        currentListState,
        loadPlantsActionCreator(plantsList),
      );

      expect(newListState.plants).toStrictEqual(plantsList);
    });
  });

  describe("When it receives and empty state of selected and load selected plant action with the plant 'Oregano'", () => {
    test("Then it should return the new state with the plant 'Oregano'", () => {
      const initialState: PlantsStateStructure = {
        plants: plantsMock,
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

      const expectedNewState: PlantsStateStructure = {
        plants: plantsMock,
        selectedPlant: plantMock,
      };

      const loadSelectedAction = loadSelectedPlantActionCreator(plantMock);

      const newState: PlantsStateStructure = plantsReducer(
        initialState,
        loadSelectedAction,
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
