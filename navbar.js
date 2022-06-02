import React from "react";

import logo from './logo.svg';

import './navbar.css';

function Navbar(){

return(


<div class="nav">

<img src={logo} class="logo" />
        
   
        <a class="text"  >About</a>
     
      
        <a class="text" >HomeWork</a>
      
     
        <a class="text" >
         Pricing
        </a>
       
          <a class="text" >Solution</a>
          <a class="text" >Feature</a>
          <a class="text" >Login</a>

</div>
  


        
         
    
  
     

);
}

export default  Navbar;