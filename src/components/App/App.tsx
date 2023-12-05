import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import PlantsPage from "../../pages/PlantsPage/PlantsPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);
  return (
    <AppStyled>
      <Header />
      {uiState.isLoading && <Loading />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/plants" />} />
        <Route path="/plants" element={<PlantsPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
