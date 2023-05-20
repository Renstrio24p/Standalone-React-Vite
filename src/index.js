import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import ReactApp from "./react-folder/react";
import Start from "./start";

const Page = (
  <React.StrictMode>
    <BrowserRouter>
      <ReactApp />
    </BrowserRouter>
  </React.StrictMode>
);

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(Page);
