import { useAppSelector } from "../../store/hooks";
import PlantCard from "../PlantCard/PlantCard.js";
import PlantListStyled from "./PlantListStyled.js";

const PlantList = (): React.ReactElement => {
  const plantsState = useAppSelector((state) => state.plantsState.plants);

  return (
    <PlantListStyled className="cards">
      {plantsState.map((plant) => (
        <li className="cards__list" key={plant._id}>
          <PlantCard plant={plant} />
        </li>
      ))}
    </PlantListStyled>
  );
};

export default PlantList;
