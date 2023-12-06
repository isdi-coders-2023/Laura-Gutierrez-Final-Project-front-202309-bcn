import usePlantsApi from "../../hooks/UsePlantsApi.js";
import {
  deletePlantsActionCreator,
  loadPlantsActionCreator,
} from "../../store/features/plants/plantsSlice.js";
import { PlantsStructure } from "../../store/features/types";
import { useAppDispatch } from "../../store/hooks.js";
import Button from "../Button/Button.js";
import PlantCardStyled from "./PlantCardStyled.js";

interface PlantCardProps {
  plant: PlantsStructure;
}

const PlantCard = ({ plant }: PlantCardProps): React.ReactElement => {
  const { name, imageUrl, use, scientificName, _id } = plant;

  const dispatch = useAppDispatch();
  const { deletePlantFromApi, getPlantsApi } = usePlantsApi();

  const deletePlant = async (id: string): Promise<void> => {
    await deletePlantFromApi(id);
    dispatch(deletePlantsActionCreator(id));

    const plantsResponse = await getPlantsApi();
    if (plantsResponse) {
      const plants = plantsResponse.plants;
      dispatch(loadPlantsActionCreator(plants));
    } else {
      throw new Error("Plant not found.");
    }
  };

  return (
    <PlantCardStyled className="card">
      <div className="plant-card__image-container">
        <img
          className="plant-card__image"
          src={imageUrl}
          alt={name}
          width="300"
          height="300"
        />
      </div>
      <div className="plant-card">
        <ul className="plant-card__info-container">
          <li className="plant-card__details">
            <span className="plant-card__use">{use}</span>
          </li>
          <li className="plant-card__details">
            <h2 className="plant-name">{name}</h2>
          </li>
          <li className="plant-card__details">
            <span className="plant-card__scientificName">{scientificName}</span>
          </li>
        </ul>
        <div className="plant-card__button-container">
          <Button
            className="plant-card__pantry"
            type="button"
            aria-label="Pantry"
          />
          <div className="plant-card__large-buttons">
            <Button text="Learn more" type="button" aria-label="Learn more" />
            <Button text="Modify" type="button" aria-label="Modify" />
            <Button
              text="Delete"
              type="button"
              aria-label="Delete"
              actionOnClick={() => {
                deletePlant(_id);
              }}
            />
          </div>
        </div>
      </div>
    </PlantCardStyled>
  );
};

export default PlantCard;
