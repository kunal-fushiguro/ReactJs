import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Example from "./Pages/Example";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Example} path="/example" />
      </Routes>
    </>
  );
}

export default App;
