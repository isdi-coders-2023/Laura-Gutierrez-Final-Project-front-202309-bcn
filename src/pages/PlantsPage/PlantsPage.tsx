import { useEffect } from "react";
import PlantsPageStyled from "./PlantsPageStyled.js";
import { loadPlantsActionCreator } from "../../store/features/plants/plantsSlice";
import PlantList from "../../components/PlantList/PlantList.js";
import usePlantsApi from "../../hooks/UsePlantsApi.js";
import { useAppDispatch } from "../../store/hooks.js";

const PlantsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPlantsApi } = usePlantsApi();

  useEffect(() => {
    (async () => {
      const response = await getPlantsApi();
      const plants = response?.plants;

      if (plants) {
        dispatch(loadPlantsActionCreator(plants));
      }
    })();
  }, [dispatch, getPlantsApi]);

  return (
    <PlantsPageStyled>
      <h1 className="plantspage-text">
        This is your online inventory of ethnobotanical plants. Mark whether
        they're in your pantry and learn all about them.
      </h1>
      <PlantList />
    </PlantsPageStyled>
  );
};

export default PlantsPage;
