import { plantsMock } from "../mocks/plantsMock";
import { PlantsStateStructure } from "../types";
import { plantsReducer, loadPlantsActionCreator } from "../plantsSlice";

describe("Given a plantsReducer reducer", () => {
  describe("When it receives an empty list of plants and the action loadPlants", () => {
    test("Then it should return a list with the plants 'Oregano' and 'Salvia'", () => {
      const emptyPlantList = plantsMock;
      const currentPlantListState: PlantsStateStructure = {
        plants: [],
      };

      const newListState = plantsReducer(
        currentPlantListState,
        loadPlantsActionCreator(emptyPlantList),
      );

      expect(newListState.plants).toStrictEqual(emptyPlantList);
    });
  });
});
