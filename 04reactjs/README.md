# Hook

### what is hook

Hooks are the features in react that is added in react version 16.8, it allow function components to have a access of state and other react features.<br/>
Because of this we don't have to write a class components or class to use react features.

### Why hook

1. To avoid the whole "this" keyword confusion.<br/>
2. Allow you to reuse staeful logic.<br/>
3. Organize the logic inside a components into reusable isolated units.<br/>

## React Hooks

### useState

"useState" hook creates an state variable which helps us to track state in components & updates the user interface when state changes.
<b>Example :</b><br/>

        import { useState } from "react";

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

### useEffect

The "useEffect" Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
<br/>"useEffect" hook takes two arguments useEffect( CallbackFunction, dependency)</br>
<b>Note : </b></br>

1. If dependency array is empty the CallbackFunction will run when page is reloaded.
2. If dependency array have a variable it will run CallbackFunction when the variable is changed/updated.
3. If we don't pass dependency array it will run CallbackFunction every time when the state of components/page is changed.</br>

<b>Example :</b><br/>

        import { useEffect, useState } from "react";

        const UseEffect = () => {
            const [count, setCount] = useState(0);
            useEffect(() => {
                if (count < 0) {
                  setCount(0);
                }
            }, [count]);
            return (
                <d-v>
                <h2>{count}</h2>
                <button onClick={() => setCount((perv) => perv - 1)}>
                    Minus the Value
                </button>
                <br />
                <button onClick={() => setCount((perv) => perv + 1)}>
                    Plus the value
                </button>
                </d-v>
            );
            };

            export default UseEffect;
