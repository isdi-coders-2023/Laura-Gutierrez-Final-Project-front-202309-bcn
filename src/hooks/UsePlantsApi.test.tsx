import { plantsMock } from "../store/features/plants/mocks/plantsMock";
import usePlantsApi from "./UsePlantsApi";
import {
  customRenderWithoutBrowserRouter,
  providerWrapper,
} from "../testUtils/CustomRender";
import { renderHook, screen } from "@testing-library/react";
import { PlantsStateStructure } from "../store/features/types";
import server from "../mocks/node";
import { errorHandlers } from "../mocks/handlers";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App/App";
import { newPlantsMock } from "../store/features/plants/mocks/newPlantsMock";

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

  describe("When it calls the deletePlant method with the plant Salvia", () => {
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

  describe("When it calls its addNewPlant function with the plant Nutmeg", () => {
    const newPlant = newPlantsMock[2];

    test("Then it should return the object 'Nutmeg'", async () => {
      const {
        result: {
          current: { addNewPlant },
        },
      } = renderHook(() => usePlantsApi(), { wrapper: providerWrapper });

      const response = await addNewPlant(newPlant);

      expect(response).toStrictEqual(newPlant);
    });
  });

  describe("When it calls its addNewPlant function with the plant Nutmeg and an error occurs,", () => {
    test("Then it should show the error message 'Error: Could not add plant. Please try again.'", async () => {
      server.use(...errorHandlers);

      const expectedErrorMessage =
        "Error: Could not add plant. Please try again.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/add"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addNewPlant },
        },
      } = renderHook(() => usePlantsApi(), { wrapper: providerWrapper });

      await addNewPlant(newPlantsMock[2]);

      const errorMessage = await screen.findByText(expectedErrorMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
