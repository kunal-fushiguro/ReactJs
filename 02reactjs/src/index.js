import React from "react";
import ReactDOM from "react-dom/client";
const div = React.createElement("div", { className: "text" }, "hello react");
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(div);
