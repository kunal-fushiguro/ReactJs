## React Concepts

### JSX

JSX stands for javascript XML.
it's an syntax extension that lets us write HTML elemnts and tags using javascript. <br/>
<b>Example</b>

        <h1 className="example>{"hello_world}</h1>

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
