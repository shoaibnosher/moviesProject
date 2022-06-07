import React from "react";

import bg from './bgdb.jpg'

import './Dashboard.css';
import Navbar from './Component/navbar'
import Search from './Component/search'
import Screen from './Component/screen'
import Primier from './Component/Primier'
import Latestplay from './Component/latestplay'
import Footer from './Component/footer'

import { useState } from 'react';
import ReactDOM from 'react-dom/client';



function Dashboard(props){



    const HandleState=(event)=>{
        event.preventDefault();
       props.changeState();
       

        
    
    
    }
    return(

        <div className="Slider">
            <Navbar/>
            <Search/>
            <Screen/>
            <Primier/>
            <Latestplay/>
            <Footer/>
    </div>

    )
   

  

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
export default Dashboard;



