# Context API

The Context API helps in sharing state between multiple components in a React application without the need for prop drilling.

### Creating a Context Component

import the necessary hooks from React:

        import { createContext, useState } from "react";

Create a context using createContext:

        const counterContext = createContext(null);

Create a provider component that will wrap your app and manage its own state:

        const ContextProvider = (props) => {
        const [value, setValue] = useState(0);
          return (
            <counterContext.Provider value={{ count: value, setValue }}>
              {props.children}
            </counterContext.Provider>
          );
        };

Export both the context and the provider component:

        export { counterContext, ContextProvider };

Import the ContextProvider and wrap your app component with it:

        import { ContextProvider } from "./Context/CounterContext.jsx";

        <ContextProvider>
            <App />
        </ContextProvider>

### UseContext State

Import useContext and the created context in the component where you want to use the shared state:

        import { useContext } from "react";
        import { counterContext } from "./Context/CounterContext";

Create a variable to access the context value:

        const counterState = useContext(counterContext);

You can now use the counterState object to access and modify the state:

        <h2>Value : {counterState.count}</h2>
        <button onClick={() => countContext.setValue((perv) => perv + 1)}>
          Increment
        </button>
