import "./App.css";
import { Route, Routes } from "react-router-dom";
import UseState from "./usestate/UseState";
function App() {
  return (
    <>
      <Routes>
        <Route Component={UseState} path="/usestate" />
      </Routes>
    </>
  );
}

export default App;
