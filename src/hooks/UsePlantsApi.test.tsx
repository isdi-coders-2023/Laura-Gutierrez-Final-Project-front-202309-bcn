import { renderHook } from "@testing-library/react";
import { plantsMock } from "../mocks/plantsMock";
import usePlantsApi from "./UsePlantsApi";
import { providerWrapper } from "../testUtils/CustomRender";
import { PlantsStateStructure } from "../store/features/types";

describe("Given a usePlantsApi custom hook", () => {
  describe("When it gets the information of Oregano and Salvia", () => {
    test("Then it should show Oregano and Salvia's information", async () => {
      const expectedPlants: PlantsStateStructure = { plants: plantsMock };

      const {
        result: {
          current: { getPlantsApi },
        },
      } = renderHook(() => usePlantsApi(), { wrapper: providerWrapper });

      const currentPlants = await getPlantsApi();

      expect(currentPlants).toStrictEqual(expectedPlants);
    });
  });

  describe("When it calls the deletePlant method with Salvia's id", () => {
    test("Then it should delete the plant 'Salvia' from the database", async () => {
      const expectedPlantId = plantsMock[1]._id;
      const expectedEmptyObject = {};

      const {
        result: {
          current: { deletePlantFromApi },
        },
      } = renderHook(() => usePlantsApi(), { wrapper: providerWrapper });

      const response = await deletePlantFromApi(expectedPlantId);

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });
});
