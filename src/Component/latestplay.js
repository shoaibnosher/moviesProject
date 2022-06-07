import './latestplay.css'
import Image from './dhappa.avif'
import Image1 from './ace.avif'
import Image2 from './guldasta.avif'
import Image3 from './eka.avif'
import Image4 from './aamne.avif'
import imgadd from './stream.avif'
 function LatestPlay()
 {
     return(

     
        <div class="LatestPlay">

            <h1 class="LatestPlay-text">Latest Play</h1> 
           

            <div class="LatestPlay-box">
        <a href="ok">
        <img  src={Image} class="LatestPlay-img" />
        </a>
           

            <h1>
           Dhappa
                
            </h1>
          
            <p>Hindi</p>

            </div>
            
    
             <div class="LatestPlay-box">
             <a  href="ok">
        <img  src={Image1} class="LatestPlay-img" />
        </a>

            <h1>
          Ace Production-Broken Images
                
            </h1>

            <p>English</p>
    

             </div>
             <div class="LatestPlay-box">
             <a href="ok">
        <img  src={Image2} class="LatestPlay-img" />
        </a>
             <h1>
                   Theater Unit Guldasta
                
            </h1>

            <p>Hindi</p>
    

             </div>
             <div class="LatestPlay-box">
             <a href="ok">
        <img src={Image3} class="LatestPlay-img" />
        </a>
             <h1>
                   Eka langnachi
                
            </h1>

            <p>Marathi</p>
    

             </div>
             <div class="LatestPlay-box">
             <a href="ok">
        <img src={Image4} class="LatestPlay-img" />
        </a>
             <h1>
                   Aamne Samne
                
            </h1>

            <p>Marathi</p>
    

             </div>
      
    
             
     </div>



     );

 }
 export default  LatestPlay;