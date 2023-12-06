import axios from "axios";
import { useCallback } from "react";
import { PlantsStateStructure, PlantsStructure } from "../store/features/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const usePlantsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getPlantsApi = useCallback(async (): Promise<
    PlantsStateStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    const { data: plants } = await axios.get<{ plants: PlantsStructure[] }>(
      "/plants",
    );

    dispatch(hideLoadingActionCreator());

    return plants;
  }, [dispatch]);

  const deletePlantFromApi = useCallback(
    async (id: string): Promise<void> => {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.delete(`/plants/${id}`);

      dispatch(hideLoadingActionCreator());

      return data;
    },
    [dispatch],
  );

  return { getPlantsApi, deletePlantFromApi };
};

export default usePlantsApi;
