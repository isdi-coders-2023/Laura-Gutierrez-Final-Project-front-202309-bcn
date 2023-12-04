import axios from "axios";
import { useCallback } from "react";
import { PlantsStateStructure, PlantsStructure } from "../store/features/types";

interface UsePlantsApiStructure {
  getPlantsApi: () => Promise<PlantsStateStructure>;
}

const usePlantsApi = (): UsePlantsApiStructure => {
  const getPlantsApi = useCallback(async (): Promise<PlantsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: plants } = await axios.get<{ plants: PlantsStructure[] }>(
      "/plants",
    );

    return plants;
  }, []);

  return { getPlantsApi };
};

export default usePlantsApi;
