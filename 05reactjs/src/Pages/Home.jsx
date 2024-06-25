import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>This is Home Page.</h1>
        <button onClick={() => navigate("/example")}>
          Navigate to example route
        </button>
      </div>
    </>
  );
};

export default Home;
