import React from "react";

import bg from './bgdb.jpg'

import './Dashboard.css';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';



function Dashboard(props){



    const removeDProperty=(event)=>{
        event.preventDefault();
       

        
    
    
    }
    return(

        <div class="Slider">
 <br></br>
 <br></br>
          <a  >Home</a>
          <br></br>
          <br></br>
 <br></br>
                <a >Horror</a>
                <br></br>
 <br></br>
                <br></br>
                <a  >Action</a>
                <br></br>
 <br></br>
                <br></br>
                <a  >Drama</a>
                <br></br>
 <br></br>
                <br></br>
                 
                <input  type="text" placeholder="Search.."></input>


    </div>

    )
   

  

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
export default Dashboard;



