//  Here we have used pure Javascript to insert text on root div
const root = document.getElementById("root");
const p = document.createElement("p");
p.innerText = "Hello world";

root.appendChild(p);
