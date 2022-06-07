import React from "react";


import './dashboard.css';
 function Dashboard() {
      return (
        <div>
          <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="menu-btn"><span /></label>
          <label htmlFor="active" className="close" />
          <div className="wrapper">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">English </a></li>
              <li><a href="#">Hindi </a></li>
              <li><a href="#">Marathi</a></li>
              <li><a href="#">Bollywood</a></li>
              <li><a href="#">Hooror</a></li>
            </ul>
          </div>
          <div className="content">
            <div className="title">
            </div>
           
          </div>
        </div>
      );
    }
 
  export default Dashboard;