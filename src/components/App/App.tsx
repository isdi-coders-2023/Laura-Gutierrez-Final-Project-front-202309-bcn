import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <h1>Herbolarium</h1>
        <Routes>
          <Route path="/" element={<Navigate to="plants" />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
