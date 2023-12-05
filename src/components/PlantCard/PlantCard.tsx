import { PlantsStructure } from "../../store/features/types";
import Button from "../Button/Button.js";
import PlantCardStyled from "./PlantCardStyled.js";

interface PlantCardProps {
  plant: PlantsStructure;
}

const PlantCard = ({
  plant: { name, image_url, use, scientific_name },
}: PlantCardProps): React.ReactElement => {
  return (
    <PlantCardStyled className="card">
      <div className="plant-card__image-container">
        <img
          className="plant-card__image"
          src={image_url}
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
            <span className="plant-card__scientificName">
              {scientific_name}
            </span>
          </li>
        </ul>
        <div className="plant-card__button-container">
          <Button
            className="plant-card__pantry"
            type="button"
            classModifier=""
            aria-label="Pantry"
          />
          <div className="plant-card__large-buttons">
            <Button
              text={"Learn more"}
              classModifier=""
              type="button"
              aria-label="Learn more"
            />
            <Button
              text={"Modify"}
              classModifier=""
              type="button"
              aria-label="Modify"
            />
            <Button
              text={"Delete"}
              classModifier=""
              type="button"
              aria-label="Delete"
            />
          </div>
        </div>
      </div>
    </PlantCardStyled>
  );
};

export default PlantCard;
