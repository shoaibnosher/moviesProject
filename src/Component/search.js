import React from "react";
import fline from'./fline.png'
import { useState } from "react";
import './search.css';
import Dashboard from './dashboard'
import ReactDOM from 'react-dom/client';


function Search(){

return(
    

    <div class="topnav">


   
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn"><span /></label>
        <label htmlFor="active" className="close" />
        <div className="wrapper">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div className="content">
          <div className="title">
           </div>
          
        </div>
      </div>
    
  
       
        

        <a >Home</a>
                <a href="#about">About</a>
                <a href="">SignIn</a>
                <input type="text" placeholder="Search.."></input>

    </div>
   
    
  

       

  
     

);
}

export default  Search;
