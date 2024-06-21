## React Concepts

### JSX

JSX stands for javascript XML.
it's an syntax extension that lets us write HTML elements and tags using javascript. <br/>
<b>Example</b>

        <h1 className="example>{"hello_world"}</h1>

### Element

Elements are the smallest building blocks of React apps. An element specifies what should be there in our UI. An Element is a plain object describing what we want to appear in terms of the DOM nodes.
<b>Example :</b></br>

        const element = <h1>Hello, world</h1>;
        ReactDOM.render(element, document.getElementById('root'));

### Components

In React a components represents a part of the user inetrface. all the components come together to make up the entire application. <br/>
all components are reusable with the differents properties to display information.
<br/>

<b>Components Types</b><br/>
In react there are two types of components <br/>

1.Stateless Functional Compoents <br/>
Functional compoents are literally javascript functions that return jsx or HTML, which describes the UI.<br/>
<b>Example :</b><br/>

            export default function App(props){
                 return <h1>hello, {props.name}</h1>;
            }

2.Stateless Class Compoents<br/>
Class components are regular ES6 classes that extends the componets class from the react library they must contain render method which in turn returns HTML.<br/>
<b>Example :</b><br/>

            class App extends React.Componets {
                render(){
                    return <h1>hello,{props.name}</h1>
                }
            }

### Props

Properties (props) are attribute's that is passed by it's parent componets to pass some data/information. <br/>
<b>Example : </b><br/>
<mark>Hello.js</mark>

        export default function Hello(props){
            return <h1>hello, {props.name}</h1>;
        }

<mark>App.js</mark>

        import Hello from "./Hello.js"

        export default function App(){
            return (
                <>
                    <Hello name="kunal"/>
                </>
            )
        }

### State

A built-in object in class components or a hook in functional components that allows components to manage and react to changes over time.

### Fragments

A React fragment is a way to group multiple elements without adding extra nodes to the DOM.
<b>Example : </b><br/>

    function Fragments(){
        return (
            <> // this is fragment
                <Compoents/>
                <Compoents/>
                <Compoents/>
            </>
        )
    }

### Key

A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.

### How Does Rendering Works In React

React render application using VDOM(virtual DOM (documents object model)).<br/>

1. If the state of react app changes then react updates "virtual dom".
2. Then react uses a process called "diffing" to compare the updated virtual dom to a previous version of it to see what it change.
3. Onces react found the changes it uses the process called "reconciliation" to update real dom with the changes that is found.

### Purity
It's tell us how react components should work.pure react components means that the same input should always return the same output.it should only return JSX and not change stuff that existed before rendering.

### Strict Mode
It is a react component that wrapped our application to prevent or detect problems while developing our application.
