import PlantFormStyled from "./PlantFormStyled";

const PlantForm = (): React.ReactElement => {
  return (
    <PlantFormStyled className="form" autoComplete="off">
      <div className="form__div">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input className="form__input" type="text" id="name" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="scientificName">
          Scientific name:
        </label>
        <input
          className="form__input"
          type="text"
          id="scientificName"
          required
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="use">
          Use (culinary/medicinal/poison):
        </label>
        <input className="form__input" type="text" id="use" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="habitat">
          Habitat:
        </label>
        <input className="form__input" type="text" id="habitat" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="imageUrl">
          Image URL:
        </label>
        <input className="form__input" type="text" id="imageUrl" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="properties">
          Properties:
        </label>
        <textarea className="form__text-area" id="properties" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="howToUse">
          How to use it:
        </label>
        <textarea className="form__text-area" id="howToUse" required />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="isPoisonous">
          If poisonous, how? (optional):
        </label>
        <textarea className="form__text-area" id="isPoisonous" required />
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
