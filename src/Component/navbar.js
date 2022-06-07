import React from "react";

import logo from './logo.png';

import './navbar.css';

function Navbar(){

return(


<div class="nav">

<img src={logo} class="logo" />
        
   
        <a class="text"  >Movies </a>
     
      
        <a class="text" >Streams</a>
      
     
        <a class="text" >
        Plays
        </a>
       
          <a class="text" >Sports</a>
          <a class="text" >Activites </a>
          <a class="text" >Buzz</a>

</div>
  


        
         
    
  
     

);
}

export default  Navbar;