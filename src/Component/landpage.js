import React from "react";
import image from './Cyber-Security-PNG-Transparent-HD-Photo.png';
import './landpasge.css';
 function Landpage()
 {
     return(

     
        <div class="mid">
      
          <img   class="img" src={image} />
        
           
       
       <h1 class="land-text">
         Cyber Security 
       </h1>
       <p >Is much more than a matter of information technology</p>
       <button class="land-button">
         Get Started
       </button>

     </div>



     );

 }
 export default Landpage;