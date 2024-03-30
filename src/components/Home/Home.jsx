import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Home() {
  return (
    <div className="homepage">
      <div className="main">
        <div className="left">

       <h1 > Full Stack Web Developer</h1> <br/>
          <h2>Hi, I'm <span>Vikram Singh Rathore</span> <br/>
          From Rajasthan, India</h2>
          
  
        </div>
        <div className="right">

          
          <img src="./vikram.jpg" alt="" />
          

        </div>
      </div>

    </div>
  );
}
