import { useContext } from "react";
import { counterContext } from "../Context/CounterContext";

const Counter = () => {
  const countContext = useContext(counterContext);
  return (
    <>
      <div>
        <button onClick={() => countContext.setValue((perv) => perv + 1)}>
          Increment
        </button>
        <button onClick={() => countContext.setValue((perv) => perv - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
