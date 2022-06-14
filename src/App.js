import React from "react";
import './app.css'


export default class App extends React.Component {
  render(){
    return(
       <div className="app">
       <header>
        <div className="logo"> Your Name </div>
        <nav>
        <p className="#about">About</p>
            <p className="#portfolio">Portfolio</p>
            <p className="#contact">Contact</p>
        </nav>
    </header>
    <div class="container">
        <div class="about-me">
            <div className="title">About Me</div>
            <div className="line"></div>
            <div className="about">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti eius porro eligendi sequi eos perspiciatis quidem in. Facilis veniam iusto sit minus ad enim repellat nobis dolorem odit quos!</p>
            </div>
        </div>

        <div className="connect-with-me">
            <div className="title">Connect with Me</div>
            <div className="line"></div>
            <div className="links">
            
               
            </div>
        </div>
    </div>
      </div>
    
    )
  }
}