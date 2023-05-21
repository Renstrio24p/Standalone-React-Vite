import React from "react";
import "./react.css";

export default function ReactApp() {
  return (
    <div className="react-content">
      <div className="react-body">
        <div className="react-head">
          <a href="https://react.dev/">
            <img className="react"></img>
          </a>
          <div className="react-text">
            <h1 className="react-header">Standalone React</h1>
            <p className="react-pgraph">
              <span className="react-title">
                Make your life simple and organize with{" "}
              </span>
              <img className="react-img"></img>
              <span className="react-js"> React JS.</span>
            </p>
            <span className="react-title">
              Click the icon to read documentation.{" "}
            </span>
          </div>
          <a href="https://vitejs.dev/">
            <img className="vite"></img>
          </a>
        </div>
        <div className="vite-overlay"></div>
        <div className="footer">
             <p className="version">Version 1.0.4</p>
             <a href="https://github.com/features/codespaces/" className="git"> <img src="github.png" className="github" /> Codespaces </a>
           </div>
      </div>
    </div>
  );
}
