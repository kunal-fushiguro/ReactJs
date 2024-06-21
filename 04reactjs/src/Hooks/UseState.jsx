import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={(e) => {
          setCount((perv) => perv + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default UseState;
