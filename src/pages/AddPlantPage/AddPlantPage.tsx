import AddPlantPageStyled from "./AddPlantPageStyled";

const AddPlantPage = (): React.ReactElement => {
  return (
    <AddPlantPageStyled>
      <div className="page">
        <h2 className="page-text">
          Can’t find your plant in our inventory? Add it here:
        </h2>
      </div>
    </AddPlantPageStyled>
  );
};

export default AddPlantPage;
