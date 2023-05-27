import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./react-18/react";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import Start from "./start"; 

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
    <React.StrictMode>
            <ReactApp />
    </React.StrictMode>
);
