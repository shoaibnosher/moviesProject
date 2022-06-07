
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

     
        <div class="Primier">

            <h1 class="Primier-text">Premiers Movies</h1> 
           

            <div class="Primier-box">
        <a href="ok">
        <img  src={Image} class="Primier-img" />
        </a>
           

            <h1>
               The Fantastic Beasts: Secret Of Dumblerodes
                
            </h1>
          
            <p>Action/Darama/Romantic</p>

            </div>
            
    
             <div class="Primier-box">
             <a  href="ok">
        <img  src={Image1} class="Primier-img" />
        </a>

            <h1>
          Spider-man:No Way Home
                
            </h1>

            <p>English</p>
    

             </div>
             <div class="Primier-box">
             <a href="ok">
        <img  src={Image2} class="Primier-img" />
        </a>
             <h1>
                   Who We Are:A Cronical Racism In America
                
            </h1>

            <p>English</p>
    

             </div>
             <div class="Primier-box">
             <a href="ok">
        <img src={Image3} class="Primier-img" />
        </a>
             <h1>
                   RRR:(Stream in Hindi)
                
            </h1>

            <p>Hindi</p>
    

             </div>
             <div class="Primier-box">
             <a href="ok">
        <img src={Image4} class="Primier-img" />
        </a>
             <h1>
                   BelFaST
                
            </h1>

            <p>English</p>
    

             </div>
      
    
             <img  src={imgPrimier} class="add-img" />
     </div>



     );

 }
 export default Primier;


   
      
      
    

     