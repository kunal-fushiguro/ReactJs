## React Concepts

### JSX

JSX stands for javascript XML.
it's an syntax extension that lets us write HTML elemnts and tags using javascript. <br/>
<b>Example</b>

        <h1 className="example>{"hello_world}</h1>

### Components

In React a components represents a part of the user inetrface. all the components come together to make up the entire application. <br/>
all components are reusable with the differents properties to display information.
<br/>

<b>Components Types</b><br/>
In react there are two types of components <br/>

1.Stateless Functional Compoents <br/>
Functional compoents are literally javascript functions that return jsx or HTML, which describes the UI.<br/>
<b>Example</b><br/>

             export default function App(props){
                 return <h1>hello, {props.name}</h1>;
             }

2.Stateless Class Compoents<br/>
Class components are regular ES6 classes that extends the componets class from the react library they must contain render method which in turn returns HTML.<br/>
<b>Example</b><br/>

            class App extends React.Componets {
                render(){
                    return <h1>hello,{props.name}</h1>
                }
            }
