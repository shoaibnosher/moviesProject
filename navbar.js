import React from "react";

import logo from './logo.svg';

import './navbar.css';

function Navbar(){
  const HandleState=(event)=>{
    event.preventDefault();
   props.changeState();
  }
return(
  
<div className="nav">

<img src={logo} className="logo" />
        
   
        <a className="text"  >About</a>
     
      
        <a className="text" >HomeWork</a>
      
     
        <a className="text" >
         Pricing
        </a>
       
          <a className="text" >Solution</a>
          <a className="text" >Feature</a>
          <a className="text" >Login</a>

</div>
  


        
         
    
  
     

);
}

export default  Navbar;