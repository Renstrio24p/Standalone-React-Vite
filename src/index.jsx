import React from "react";
// import { ReactDOM }  from "react"; // React 17
import ReactDOM from "react-dom/client" // React 18

const Page = (
    <React.StrictMode>
        <Start />
    </React.StrictMode>
)

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(Page) // React 18

// ReactDOM.render(<Start />,document.getElementById('root')) // React 17
