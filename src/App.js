
import './App.css';
import React ,{useState} from 'react';


import Login from './login'
import Dashboard from './dashboard'
import Navbar from './Component/navbar'
import Search from './Component/search'
import Screen from './Component/screen'
import Primier from './Component/Primier'
import Latestplay from './Component/latestplay'
import Footer from './Component/footer'

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
      <>
       stateChanger={HandleState}
            <Search/>
            <Navbar />
            <Screen/>
            <Primier/>
            <Latestplay/>
            <Footer/>
      
          
            
            </>
          ) 
         

    
  }
    

    
 
  

}

export default App;
