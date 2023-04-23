import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./src/react-app"
import ReactApp from "./src/react";

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(<Page />)
                                                            
// You can start coding right here with your experiment

// To call all your files inside the src folder use this command below.

// const DOM = ReactDOM.createRoot(document.getElementById('root'))
// DOM.render(<ReactApp />) 

/*
  Note: React 17 vs React 18

  ReactDOM.render(<Page />, document.getElementById('root')) << React 17
  
  vs
  
  ReactDOM.createRoot(document.getElementById('root')).render(<Page /> << React 18

  or 
  
  const DOM = ReactDOM.createRoot(document.getElementById('root')) << React 18 with const it in a variable
  DOM.render(<Page />

*/
