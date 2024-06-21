import "./App.css";
import { Route, Routes } from "react-router-dom";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
function App() {
  return (
    <>
      <Routes>
        <Route Component={UseState} path="/usestate" />
        <Route Component={UseEffect} path="/useeffect" />
        <Route Component={UseRef} path="/useref" />
      </Routes>
    </>
  );
}

export default App;
