## Creating React App With The Help of Webpack

initialize project

        npm init -y

Install React and ReactDOM

        npm i react react-dom

Install webpack

        npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server

Create <mark>.babelrc</mark> file

        {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
        }

Create a webpack.config.js file

        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");

        module.exports = {
        output: {
            path: path.join(__dirname, "/dist"), // the bundle output path
            filename: "bundle.js", // the name of the bundle
        },
        plugins: [
            new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
            }),
        ],
        devServer: {
            port: 3000, // you can change the port
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
            ],
        },
        };

Create src folder and put/create index.html and index.js file there

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create React With webpack</title>
        </head>
        <body>
        <div id="root"></div>
        </body>
        <script src="./index.js"></script>
        </html>

in index.js file import React and ReactDOM

        import React from "react";
        import ReactDOM from "react-dom/client";
        const div = React.createElement("div", { className: "text" }, "hello react");
        console.log(div);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        console.log(root);
        root.render(div);

Run the Server

        npm run serve
