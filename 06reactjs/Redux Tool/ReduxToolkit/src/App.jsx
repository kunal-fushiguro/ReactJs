import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Cart} path="/cart" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
