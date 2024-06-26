import "./App.css";
import { Route, Routes } from "react-router-dom";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
function App() {
  return (
    <>
      <Routes>
        <Route Component={UseState} path="/usestate" />
        <Route Component={UseEffect} path="/useeffect" />
        <Route Component={UseRef} path="/useref" />
        <Route Component={UseMemo} path="/usememo" />
        <Route Component={UseReducer} path="/usereducer" />
        <Route Component={UseLayoutEffect} path="/uselayout" />
      </Routes>
    </>
  );
}

export default App;
