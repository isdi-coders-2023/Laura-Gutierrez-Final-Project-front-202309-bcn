import axios from "axios";
import { useCallback } from "react";
import { PlantsStructure } from "../store/features/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";

const usePlantsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getPlantsApi = useCallback(async () => {
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
