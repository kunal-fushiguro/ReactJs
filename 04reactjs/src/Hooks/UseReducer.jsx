import { useReducer } from "react";

const UseReducer = () => {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, 0);
  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "add" })}>Increment</button>
        <span>{state}</span>
        <button onClick={() => dispatch({ type: "sub" })}>Decrement</button>
      </div>
    </>
  );
};

export default UseReducer;
