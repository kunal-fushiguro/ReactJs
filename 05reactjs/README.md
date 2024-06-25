# React Router Dom

React Router DOM is a collection of navigational components that compose declaratively with your application.

### Installation

1.  Create React App

        npm create vite@latest

2.  Install React Router Dom

        npm i react-router-dom

### Initialization

In <mark>main.jsx</mark> import "BrowserRouter" from react-router-dom and wrap <mark>App.jsx</mark> with "BrowserRouter".

        import { BrowserRouter } from "react-router-dom";

        <!-- wrap App component like this -->
        <BrowserRouter>
            <App />
        </BrowserRouter>

Now create new routes components/pages and In <mark>App.jsx</mark> import "Route , Routes" for creating multiple routes in application.

        import { Route, Routes } from "react-router-dom";

Create Pages for different routes like "Home.jsx" and "Example.jsx".<br/>
<b>Home.jsx</b><br/>

        import React from "react";
        import { useNavigate } from "react-router-dom";

        const Home = () => {
          const navigate = useNavigate();
          return (
            <>
              <div>
                <h1>This is Home Page.</h1>
                <button onClick={() => navigate("/example")}>
                  Navigate to example route
                </button>
              </div>
            </>
          );
        };

        export default Home;

<b>Example.jsx</b><br/>

        import React from "react";
        import { useNavigate } from "react-router-dom";

        const Example = () => {
          const navigate = useNavigate();
          return (
            <>
              <div>
                <h1>This is Example Page.</h1>
                <button onClick={() => navigate("/")}>Navigate to example route</button>
              </div>
            </>
          );
        };

        export default Example;

In Above code i have used "useNavigate()" for navigation we can also use "Link" tag for navigation.
<br/>
<br/>
Now Create Routes in "App.jsx"

        import { Route, Routes } from "react-router-dom";
        import "./App.css";
        import Home from "./Pages/Home";
        import Example from "./Pages/Example";

        function App() {
          return (
            <>
              <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Example} path="/example" />
              </Routes>
            </>
          );
        }

        export default App;
