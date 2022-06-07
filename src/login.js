import React from "react";
import logo from './logonet.jpg'
import bg from './loginbg.jpg'

import './login.css';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';



function Login(props){



    const [state,setState]=useState("");
    const [password,setpassword]=useState("");
    const HandleState=(event)=>{
        event.preventDefault();
       

        
    
    
    }
    

    return (
    
      
     
        
        <form onSubmit={HandleState}>

<div class="Login" style={{ backgroundImage: `url(${bg})` } }>
    

<img src={logo} class="login-logo" />

<br></br>
<h1 ></h1>
            <div class="login-input">


            <input  class="login-input" 
              type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)
            }
            placeholder="Enter UserName" />
            <br></br>
             <input class="login-input" 
              type="password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"/>
            <br></br>
          
          <input type="submit"  onclick={props.stateChanger}/>
                
            </div>
          


          </div> 
        

        </form>
        



      
      );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
export default Login;



