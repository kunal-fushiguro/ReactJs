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
