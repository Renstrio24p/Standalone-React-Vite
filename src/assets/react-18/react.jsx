import React from "react"
import './react.scss'

export default function ReactApp() {
    return (
        <div className="react-content">
            <div className="react-body">
                <div className="react-head">
                    <a href="https://react.dev/"><img src="react-18/react.svg" className='react'></img></a>
                    <div className="react-text">
                         <h1 className="react-header">Standalone React</h1>
                         <p className='react-pgraph'> 
                           <span className="react-title">Make your life simple and organize with </span> 
                             <img src="react-18/react.svg" className="react-img"></img>
                             <span className='react-js'> React JS.</span> 
                         </p>
                         <p className="react-title">Vite Version. supports Codespace</p>
                    </div>
                    <a href="https://vitejs.org/"><img src="react-18/vite.svg" className='vite'></img></a>
                </div>
           <div className="footer">
             <p className="version">Version 1.0.5</p>
             <a href="https://github.com/features/codespaces/" className="git"> <img src="react-18/github.png" className="github" /> Codespaces </a>
           </div>
           </div>
        </div>
    )
}