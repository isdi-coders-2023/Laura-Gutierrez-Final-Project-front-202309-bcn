import axios from "axios";
import { useCallback } from "react";
import {
  PlantStructureWithoutId,
  PlantsStateStructure,
  PlantsStructure,
} from "../store/features/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { toast } from "react-toastify";

const usePlantsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getPlantsApi = useCallback(async (): Promise<
    PlantsStateStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    const { data: plants } = await axios.get<{
      plants: PlantsStructure[];
      selectedPlant: PlantsStructure;
    }>("/plants");

    dispatch(hideLoadingActionCreator());

    return plants;
  }, [dispatch]);

  const deletePlantFromApi = useCallback(
    async (id: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/plants/${id}`);

        toast.success("Plant removed from our inventory!");

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Error: Couldn’t remove plant. Please try again.");
      }
    },
    [dispatch],
  );

  const addNewPlant = useCallback(
    async (
      newPlant: PlantStructureWithoutId,
    ): Promise<PlantsStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { plant },
        } = await axios.post<{ plant: PlantsStructure }>(
          "plants/add",
          newPlant,
        );
        dispatch(hideLoadingActionCreator());

        toast.success("Plant added successfully!", {
          className: "toast toast--success",
        });

        return plant;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Error: Could not add plant. Please try again.");
      }
    },
    [dispatch],
  );

  return { getPlantsApi, deletePlantFromApi, addNewPlant };
};

export default usePlantsApi;
