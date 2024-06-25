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
                if (count <br 0) {
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

            export default UseEffect

### useRef

it allow us to create mutable variables, which will not re-render the components.it is also used to access DOM elements.<br/>
<b>Example :</b><br/>

        import { useRef } from "react";

        const UseRef = () => {
          const value = useRef();

          return (
            <div>
              <input type="text" ref={value} />
              <button
                onClick={() => {
                  console.log(value.current);
                  value.current.style.background = "blue";
                }}
              >
                display useRef
              </button>
            </div>
          );
        };

        export default UseRef;

### useMemo

it's returns a memoized value. (it's like caching a value so that it doesn't need to be recalculated.)<br/>
<b>Example :</b><br/>

        import { useMemo, useState } from "react";

        const UseMemo = () => {
          const [value, setValue] = useState();
          const [value2, setValue2] = useState();
          const [total, setTotal] = useState(0);
          //   without usememo
          //    in console.log you can see that hello is printing again again when yo click on button but after using useMemo it will not print hello until you change the value
          //   const addFn = () => {
          //     for (let i = 0; i <br 1000; i++) {
          //       console.log("hello");
          //     }
          //     setTotal(value + value2);
          //   };
          const addFn = useMemo(() => {
            for (let i = 0; i <br 1000; i++) {
              console.log("hello");
            }
            let totalval = value + value2;
            setTotal(totalval);
          }, [value, value2]);
          return (
            <div>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
              <button onClick={addFn}>Sum</button>
              <span>{total}</span>
            </div>
          );
        };

        export default UseMemo;

### useCallback

It let you cache a function definition between re-renders.
it means it don't create a multiple instance of same function when re-renders happens.
instance of creating new instance of the function ,it provides cached function on re-renders of the components.</br>
<b>Example :</b><br/>
<mark>App.jsx</mark><br/>

      import { useState, useCallback } from 'react'
      import reactLogo from './assets/react.svg'
      import viteLogo from '/vite.svg'
      import './App.css'
      import Navbar from './components/Navbar'

      function App() {
        const [count, setCount] = useState(0)
        const [count2, setCount2] = useState(0)
        const [adjective, setAdjective] = useState("good")

        // const getAdjective = () => {
        //   return "another" + count
        // }

        const getAdjective = useCallback(() => {
          return "another" + count
        },[count] )



        return (
          <>
            <Navbar adjective={"good"} getAdjective={getAdjective} />
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        )
      }

      export default App

<mark>Navbar.jsx</mark></br>

    import React from 'react'
    import { memo } from 'react'

    const Navbar = ({adjective, getAdjective}) => {
        console.log("Navbar is rendered")
      return (
        <div>
          I am a {adjective} Navbar
          <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
        </div>
      )
    }

export default memo(Navbar)

### useReducer

It is similar to useState but provides state and dispatch function.
it accepts two arguments first reducer function second initial state and return current state and dispatch method.</br>
<b>Example :</b><br/>

### useLayoutEffect

It is similar to useEffect hook but it is called before the user interface gets mounted. it means it will called before printing the DOM elements, in other hand useEffect will called when DOM elements are printed.</br>
<b>Example :</b><br/>
