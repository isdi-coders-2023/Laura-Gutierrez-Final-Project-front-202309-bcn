import { plantsMock } from "../mocks/plantsMock";
import { plantsReducer, loadPlantsActionCreator } from "../plantsSlice";
import { PlantsStateStructure } from "../../types";

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
});
