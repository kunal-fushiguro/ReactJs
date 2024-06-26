import Count from "./Component/Count";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "plus" })}>Increment</button>
        <Count />
        <button onClick={() => dispatch({ type: "minus" })}>Decrement</button>
      </div>
    </>
  );
}

export default App;
