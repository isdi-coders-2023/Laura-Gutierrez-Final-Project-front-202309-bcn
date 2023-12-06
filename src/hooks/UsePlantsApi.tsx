import axios from "axios";
import { useCallback } from "react";
import { PlantsStateStructure, PlantsStructure } from "../store/features/types";
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

    const { data: plants } = await axios.get<{ plants: PlantsStructure[] }>(
      "/plants",
    );

    dispatch(hideLoadingActionCreator());

    return plants;
  }, [dispatch]);

  const deletePlantFromApi = useCallback(
    async (id: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/plants/${id}`);

        toast.success("Plant removed from our inventory!", {
          style: { backgroundColor: "#055B2DCC", color: "#fff" },
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Error: Couldn’t remove plant. Please try again.", {
          style: { backgroundColor: "#C52323", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  return { getPlantsApi, deletePlantFromApi };
};

export default usePlantsApi;
