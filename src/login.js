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
       props.changeState();

        
    
    
    }
    

    return (
    
      
     
        
        <form onSubmit={HandleState}>

<div className="Login" style={{ backgroundImage: `url(${bg})` } }>
    

<img src={logo} className="login-logo" />

<br></br>
<h1 ></h1>
            <div className="login-input">


            <input  className="login-input" 
              type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)
            }
            placeholder="Enter UserName" />
            <br></br>
             <input className="login-input" 
              type="password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"/>
            <br></br>
          
          <input type="submit"  onClick={props.stateChanger}/>
                
            </div>
          


          </div> 
        

        </form>
        



      
      );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
export default Login;



