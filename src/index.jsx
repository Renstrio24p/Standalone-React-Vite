import React from "react";
import ReactDOM from "react-dom/client";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import ReactApp from "./react-18/react";
import Start from "./start";  // replace the <ReactApp /> to <Start /> to start coding..

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
    <React.StrictMode>
        <ReactApp />
    </React.StrictMode>
);
