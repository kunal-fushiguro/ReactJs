import React from "react";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>This is Example Page.</h1>
        <button onClick={() => navigate("/")}>Navigate to example route</button>
      </div>
    </>
  );
};

export default Example;
