
import './Primier.css';
import Image from './secret.avif'
import Image1 from './spiderman.avif'
import Image2 from './whowe.avif'
import Image3 from './rrr.avif'
import Image4 from './belfast.avif'
import imgPrimier from './primier.avif'

 function Primier()
 {
     return(

     
        <div className="Primier">

            <h1 className="Primier-text">Premiers Movies</h1> 
           

            <div className="Primier-box">
        <a href="ok">
        <img  src={Image} className="Primier-img" />
        </a>
           

            <h1>
               The Fantastic Beasts: Secret Of Dumblerodes
                
            </h1>
          
            <p>Action/Darama/Romantic</p>

            </div>
            
    
             <div className="Primier-box">
             <a  href="ok">
        <img  src={Image1} className="Primier-img" />
        </a>

            <h1>
          Spider-man:No Way Home
                
            </h1>

            <p>English</p>
    

             </div>
             <div className="Primier-box">
             <a href="ok">
        <img  src={Image2} className="Primier-img" />
        </a>
             <h1>
                   Who We Are:A Cronical Racism In America
                
            </h1>

            <p>English</p>
    

             </div>
             <div className="Primier-box">
             <a href="ok">
        <img src={Image3} className="Primier-img" />
        </a>
             <h1>
                   RRR:(Stream in Hindi)
                
            </h1>

            <p>Hindi</p>
    

             </div>
             <div className="Primier-box">
             <a href="ok">
        <img src={Image4} className="Primier-img" />
        </a>
             <h1>
                   BelFaST
                
            </h1>

            <p>English</p>
    

             </div>
      
    
             <img  src={imgPrimier} className="add-img" />
     </div>



     );

 }
 export default Primier;


   
      
      
    

     