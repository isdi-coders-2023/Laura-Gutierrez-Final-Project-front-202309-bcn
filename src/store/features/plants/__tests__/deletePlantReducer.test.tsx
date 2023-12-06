import { plantsMock } from "../../../../mocks/plantsMock";
import { deletePlantsActionCreator, plantsReducer } from "../plantsSlice";
import { PlantsStateStructure } from "../types";

describe("Given a plantsSlice with a deletePlant minireducer", () => {
  describe("When it receives a list with Oregano and Salvia", () => {
    test("Then it should return the list of plants without Salvia", () => {
      const initialState: PlantsStateStructure = { plants: plantsMock };
      const expectedDeletedPlant = "Salvia";

      const currentPlantsState = plantsReducer(
        initialState,
        deletePlantsActionCreator("6566158cd11a3f8f1075c7a2"),
      );

      currentPlantsState.plants.forEach((plant) => {
        expect(plant).not.toHaveProperty("name", expectedDeletedPlant);
      });
    });
  });
});
