
import './scree.css';
import Image from './samrat Pri.avif'
import Image1 from './jussaric.avif'
import Image2 from './bhool.avif'
import Image3 from './majoor.avif'
import Image4 from './vikram.avif'
import imgadd from './stream.avif'
 function Screen()
 {
     return(

     
        <div class="screen">

            <h1 class="Screen-text">Recommended Movies</h1> 
           

            <div class="Screen-box">
        <a href="ok">
        <img  src={Image} class="Screen-img" />
        </a>
           

            <h1>
            Samrat pritiviraj
                
            </h1>
          
            <p>Action/Darama/Romantic</p>

            </div>
            
    
             <div class="Screen-box">
             <a  href="ok">
        <img  src={Image1} class="Screen-img" />
        </a>

            <h1>
           Jussaric World:Dominon
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div class="Screen-box">
             <a href="ok">
        <img  src={Image2} class="Screen-img" />
        </a>
             <h1>
                    Bhool Bulliya 2
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div class="Screen-box">
             <a href="ok">
        <img src={Image3} class="Screen-img" />
        </a>
             <h1>
                    Major
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div class="Screen-box">
             <a href="ok">
        <img src={Image4} class="Screen-img" />
        </a>
             <h1>
                    Vikram:Hitlist
                
            </h1>

            <p>Action/Thriller</p>
    

             </div>
      
    
             <img  src={imgadd} class="add-img" />
     </div>



     );

 }
 export default Screen;