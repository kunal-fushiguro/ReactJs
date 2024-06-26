# Redux Setup with React

## Installation

To install `redux` and `react-redux`, run the following command:

```sh
npm i redux react-redux
```

## Setup Redux Store

### Create the Store

First, import createStore from redux and create the store:

    // redux/store.js
    import { createStore } from "redux";

    const store = createStore();

    export { store };

### Provide Store to React Application

Import Provider from react-redux and wrap your app with it, passing the store as a prop:

    // main.js
    import React from "react";
    import ReactDOM from "react-dom";
    import { Provider } from "react-redux";
    import { store } from "./redux/store";
    import App from "./App";

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );

### Create Reducer

Create a reducer function that handles state and pass it to createStore as a parameter:

    // redux/reducer.js
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case "plus":
          return state + 1;
        case "minus":
          return state - 1;
        default:
          return state;
      }
    };

    export default reducer;

### Update Store to Use Reducer

Update your store to use the reducer:

    // redux/store.js
    import { createStore } from "redux";
    import reducer from "./reducer";

    const store = createStore(reducer);

    export { store };

### Use useDispatch to Change State

Import useDispatch from react-redux in your component and use it to dispatch actions:

    // App.jsx
    import React from "react";
    import { useDispatch } from "react-redux";

    const App = () => {
      const dispatch = useDispatch();

      return (
        <div>
          <button onClick={() => dispatch({ type: "plus" })}>Increment</button>
          <button onClick={() => dispatch({ type: "minus" })}>Decrement</button>
        </div>
      );
    };

    export default App;

### Use useSelector to Get State

Import useSelector to get the state in your component:

    // App.jsx
    import React from "react";
    import { useSelector } from "react-redux";

    const App = () => {
      const count = useSelector((state) => state);

      return (
        <div>
          <h2>{count}</h2>
          <button onClick={() => dispatch({ type: "plus" })}>Increment</button>
          <button onClick={() => dispatch({ type: "minus" })}>Decrement</button>
        </div>
      );
    };

    export default App;

Now, your App.jsx file should look like this:

    // App.jsx
    import React from "react";
    import { useDispatch, useSelector } from "react-redux";

    const App = () => {
      const dispatch = useDispatch();
      const count = useSelector((state) => state);

      return (
        <div>
          <h2>{count}</h2>
          <button onClick={() => dispatch({ type: "plus" })}>Increment</button>
          <button onClick={() => dispatch({ type: "minus" })}>Decrement</button>
        </div>
      );
    };

    export default App;
