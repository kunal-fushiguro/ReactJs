import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((perv) => perv - 1)}>
        Minus the Value
      </button>
      <br />
      <button onClick={() => setCount((perv) => perv + 1)}>
        Plus the value
      </button>
    </div>
  );
};

export default UseEffect;
