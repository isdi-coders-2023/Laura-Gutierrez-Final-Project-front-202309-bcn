import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "../AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
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
