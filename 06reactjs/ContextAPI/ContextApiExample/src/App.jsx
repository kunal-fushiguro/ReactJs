import { useContext } from "react";
import "./App.css";
import Counter from "./Component/Counter";
import { counterContext } from "./Context/CounterContext";

function App() {
  const counterState = useContext(counterContext);
  return (
    <>
      <div>
        <h1>Context API</h1>
        <h2>Value : {counterState.count}</h2>
        <Counter /> <br />
        <Counter /> <br />
        <Counter /> <br />
        <Counter /> <br />
      </div>
    </>
  );
}

export default App;
