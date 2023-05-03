import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./react-logo/react-app";

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(<Page />)




// import Act from "./src/activity"

// const DOM = ReactDOM.createRoot(document.getElementById('root'))
// DOM.render(<Act />)

// const Page = (
//     <div>
//         <img src="./images/react-logo.svg" width="80px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// const DOM = ReactDOM.createRoot(document.getElementById('root'))
// DOM.render(Page)


                                                            
// You can start coding right here with your experiment

/*
  Note: React 17 vs React 18

  ReactDOM.render(<Page />, document.getElementById('root')) << React 17
  
  vs
  
  ReactDOM.createRoot(document.getElementById('root')).render(<Page /> << React 18

  or 
  
  const DOM = ReactDOM.createRoot(document.getElementById('root')) << React 18 with const it in a variable
  DOM.render(<Page />

*/
