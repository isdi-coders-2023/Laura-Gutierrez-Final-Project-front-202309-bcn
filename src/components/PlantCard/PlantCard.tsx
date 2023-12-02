import { PlantsStructure } from "../../store/features/types";
import Button from "../Button/Button.js";
import PlantCardStyled from "./PlantCardStyled.js";

interface PlantCardProps {
  plant: PlantsStructure;
}

const PlantCard = ({
  plant: { name, imageUrl, use, scientificName },
}: PlantCardProps): React.ReactElement => {
  return (
    <PlantCardStyled className="card">
      <img
        className="plant-card__image"
        src={imageUrl}
        alt={name}
        width="300"
        height="300"
      />
      <div className="plant-card">
        <dl className="plant-card__info-container">
          <div className="plant-card__details">
            <dd className="plant-card__use">{use}</dd>
          </div>
          <div className="plant-card__details">
            <h2 className="plant-name">{name}</h2>
          </div>
          <div className="plant-card__details">
            <dd className="plant-card__scientificName">{scientificName}</dd>
          </div>
        </dl>
        <div className="plant-card__button-container">
          <Button className="pantry" />
          <Button text={"Modify"} className="regular-button" />
          <Button text={"Delete"} className="regular-button" />
        </div>
      </div>
    </PlantCardStyled>
  );
};

export default PlantCard;
