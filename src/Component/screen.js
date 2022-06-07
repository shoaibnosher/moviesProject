
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

     
        <div className="screen">

            <h1 className="Screen-text">Recommended Movies</h1> 
           

            <div className="Screen-box">
        <a href="ok">
        <img  src={Image} className="Screen-img" />
        </a>
           

            <h1>
            Samrat pritiviraj
                
            </h1>
          
            <p>Action/Darama/Romantic</p>

            </div>
            
    
             <div className="Screen-box">
             <a  href="ok">
        <img  src={Image1} className="Screen-img" />
        </a>

            <h1>
           Jussaric World:Dominon
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div className="Screen-box">
             <a href="ok">
        <img  src={Image2} className="Screen-img" />
        </a>
             <h1>
                    Bhool Bulliya 2
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div className="Screen-box">
             <a href="ok">
        <img src={Image3} className="Screen-img" />
        </a>
             <h1>
                    Major
                
            </h1>

            <p>Action/Adventure/Thriller</p>
    

             </div>
             <div className="Screen-box">
             <a href="ok">
        <img src={Image4} className="Screen-img" />
        </a>
             <h1>
                    Vikram:Hitlist
                
            </h1>

            <p>Action/Thriller</p>
    

             </div>
      
    
             <img  src={imgadd} className="add-img" />
     </div>



     );

 }
 export default Screen;