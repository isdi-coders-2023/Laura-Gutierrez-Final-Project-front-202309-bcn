import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import PlantsPage from "../../pages/PlantsPage/PlantsPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/plants" />} />
          <Route path="/plants" element={<PlantsPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
