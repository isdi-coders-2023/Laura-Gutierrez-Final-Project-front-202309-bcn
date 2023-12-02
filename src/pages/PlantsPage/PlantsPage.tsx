import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import PlantsPageStyled from "./PlantsPageStyled.js";
import { loadPlantsActionCreator } from "../../store/features/plants/plantsSlice";
import { plantsMock } from "../../mocks/plantsMock";
import PlantList from "../../components/PlantList/PlantList.js";
import usePlantsApi from "../../hooks/UsePlantsApi.js";

const PlantsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const getPlantsApi = usePlantsApi;

  useEffect(() => {
    dispatch(loadPlantsActionCreator(plantsMock));
  }, [dispatch, getPlantsApi]);

  return (
    <PlantsPageStyled>
      <h1 className="plantspage-text">
        This is your online inventory of ethnobotanical plants. Mark if they're
        in your pantry and learn all about them.
      </h1>
      <PlantList />
    </PlantsPageStyled>
  );
};

export default PlantsPage;
