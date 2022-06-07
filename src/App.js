
import './App.css';
import React ,{useState} from 'react';


import Login from './login'
import Dashboard from './dashboard'


const App = ()=> {
  const [switcher,setswitcher]=useState(true);
  const HandleState=()=>{
    setswitcher(!switcher);
  }
    
  if(switcher)
  {
    return< Login  stateChanger={HandleState}/>
   
  }
  else{
    return(
      
       <Dashboard  stateChanger={HandleState}/>

            
           
          
            
            
          ) 
         

    
  }
    

    
 
  

}

export default App;
