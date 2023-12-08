import { useEffect, useState } from "react";
import {
  PlantStructureWithoutId,
  PlantsStructure,
} from "../../store/features/types";
import PlantFormStyled from "./PlantFormStyled";

interface PlantFormProps {
  submitAction: (newPlant: PlantsStructure) => void;
  initialState?: PlantStructureWithoutId;
}

const PlantForm = ({
  submitAction,
  initialState,
}: PlantFormProps): React.ReactElement => {
  const emptyPlant: PlantStructureWithoutId = {
    name: "",
    scientificName: "",
    use: "",
    properties: "",
    howToUse: "",
    imageUrl: "",
    isPoisonous: false,
    habitat: "",
  };

  const currentInitialState = initialState ? initialState : emptyPlant;

  const [newPlant, setNewPlant] = useState<PlantStructureWithoutId>(emptyPlant);
  useState<PlantStructureWithoutId>(currentInitialState);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newPlant as PlantsStructure);
  };

  const onChangeEditPlant = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewPlant((currentNewPlant) => ({
      ...currentNewPlant,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    const newPlantValues = Object.values(newPlant);

    newPlantValues.every((value) => value !== "");
  }, [newPlant]);

  return (
    <PlantFormStyled
      className="form"
      onSubmit={onFormSubmit}
      autoComplete="off"
    >
      <div className="form__div">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={newPlant.name}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="scientificName">
          Scientific name:
        </label>
        <input
          className="form__input"
          type="text"
          id="scientificName"
          value={newPlant.scientificName}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="use">
          Use (culinary/medicinal/poison):
        </label>
        <input
          className="form__input"
          type="text"
          id="use"
          value={newPlant.use}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="habitat">
          Habitat:
        </label>
        <input
          className="form__input"
          type="text"
          id="habitat"
          value={newPlant.habitat}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="imageUrl">
          Image URL:
        </label>
        <input
          className="form__input"
          type="text"
          id="imageUrl"
          value={newPlant.imageUrl}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="properties">
          Properties:
        </label>
        <textarea
          className="form__text-area"
          id="properties"
          value={newPlant.properties}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="howToUse">
          How to use it:
        </label>
        <textarea
          className="form__text-area"
          id="howToUse"
          value={newPlant.howToUse}
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="isPoisonous">
          If poisonous, how? (optional):
        </label>
        <textarea
          className="form__text-area"
          id="isPoisonous"
          onChange={onChangeEditPlant}
          required
        />
      </div>
      <div className="form__div">
        <button className="form__button" type="submit">
          Upload plant
        </button>
      </div>
    </PlantFormStyled>
  );
};

export default PlantForm;
