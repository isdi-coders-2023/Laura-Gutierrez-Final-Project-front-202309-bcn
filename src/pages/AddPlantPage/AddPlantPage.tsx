import PlantForm from "../../components/PlantForm/PlantForm";
import usePlantsApi from "../../hooks/UsePlantsApi";
import { PlantsStructure } from "../../store/features/types";
import AddPlantPageStyled from "./AddPlantPageStyled";

const AddPlantPage = (): React.ReactElement => {
  const { addNewPlant } = usePlantsApi();

  const addCurrentPlant = (newPlant: PlantsStructure) => {
    addNewPlant(newPlant);
  };

  return (
    <AddPlantPageStyled>
      <div className="page">
        <h2 className="page-text">
          Can’t find your plant in our inventory? Add it here:
        </h2>
        <PlantForm submitAction={addCurrentPlant} />
      </div>
    </AddPlantPageStyled>
  );
};

export default AddPlantPage;
