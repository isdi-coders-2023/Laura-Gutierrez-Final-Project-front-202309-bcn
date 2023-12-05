import axios from "axios";
import { useCallback } from "react";
import { PlantsStateStructure, PlantsStructure } from "../store/features/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

interface UsePlantsApiStructure {
  getPlantsApi: () => Promise<PlantsStateStructure>;
}

const usePlantsApi = (): UsePlantsApiStructure => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getPlantsApi = useCallback(async (): Promise<PlantsStateStructure> => {
    dispatch(showLoadingActionCreator());

    const { data: plants } = await axios.get<{ plants: PlantsStructure[] }>(
      "/plants",
    );

    dispatch(hideLoadingActionCreator());

    return plants;
  }, [dispatch]);

  return { getPlantsApi };
};

export default usePlantsApi;
