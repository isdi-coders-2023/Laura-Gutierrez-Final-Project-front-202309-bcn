import { newPlantsMock } from "../mocks/newPlantsMock";
import { plantsMock } from "../mocks/plantsMock";
import { addNewPlantActionCreator, plantsReducer } from "../plantsSlice";
import { PlantsStateStructure, PlantsStructure } from "../types";

describe("Given a plantsSlice's reducer", () => {
  describe("When it receives a plant list, an 'Nutmeg' plant object and the action addPlant", () => {
    test("Then it should return the plant's list containing 'Nutmeg' plant object.", () => {
      const initialState: PlantsStateStructure = { plants: plantsMock };
      const newPlant: PlantsStructure = newPlantsMock[2];

      const currentPlantsState = plantsReducer(
        initialState,
        addNewPlantActionCreator(newPlant),
      );

      expect(currentPlantsState.plants).toStrictEqual(newPlantsMock);
    });
  });
});
