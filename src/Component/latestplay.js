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

     
        <div className="LatestPlay">

            <h1 className="LatestPlay-text">Latest Play</h1> 
           

            <div className="LatestPlay-box">
        <a href="ok">
        <img  src={Image} className="LatestPlay-img" />
        </a>
           

            <h1>
           Dhappa
                
            </h1>
          
            <p>Hindi</p>

            </div>
            
    
             <div className="LatestPlay-box">
             <a  href="ok">
        <img  src={Image1} className="LatestPlay-img" />
        </a>

            <h1>
          Ace Production-Broken Images
                
            </h1>

            <p>English</p>
    

             </div>
             <div className="LatestPlay-box">
             <a href="ok">
        <img  src={Image2} className="LatestPlay-img" />
        </a>
             <h1>
                   Theater Unit Guldasta
                
            </h1>

            <p>Hindi</p>
    

             </div>
             <div className="LatestPlay-box">
             <a href="ok">
        <img src={Image3} className="LatestPlay-img" />
        </a>
             <h1>
                   Eka langnachi
                
            </h1>

            <p>Marathi</p>
    

             </div>
             <div className="LatestPlay-box">
             <a href="ok">
        <img src={Image4} className="LatestPlay-img" />
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