import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import PlantsPageStyled from "../PlantsPageStyled";
import { loadPlantsActionCreator } from "../../store/features/plants/plantsSlice";
import { plantsMock } from "../../mocks/plantsMock";

const PlantsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPlantsActionCreator(plantsMock));
  }, [dispatch]);

  return (
    <PlantsPageStyled>
      <h1 className="homepage-text">
        This is your online inventory of ethnobotanical plants. Mark if they're
        in your pantry and learn all about them.
      </h1>
    </PlantsPageStyled>
  );
};

export default PlantsPage;
