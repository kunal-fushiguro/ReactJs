//  Here we have used pure Javascript to insert text on root div
const root = document.getElementById("root");
const p = document.createElement("p");
p.innerText = "Hello world";
root.appendChild(p);

// Using React to insert text
const div = React.createElement("div", { className: "text" }, "hello react");
console.log(div);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
console.log(root2);
root2.render(div);

// Inserting Children inside root3
const child1 = React.createElement("p", {}, "Hello1");
const child2 = React.createElement("p", {}, "Hello2");
const div2 = React.createElement("div", { className: "text" }, [
  child1,
  child2,
]);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(div2);
