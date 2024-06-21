import "./App.css";
import { Route, Routes } from "react-router-dom";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
function App() {
  return (
    <>
      <Routes>
        <Route Component={UseState} path="/usestate" />
        <Route Component={UseEffect} path="/useeffect" />
      </Routes>
    </>
  );
}

export default App;
