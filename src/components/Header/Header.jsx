// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header>
      
 
     <div>
     <Navbar/>
     <div className="cta">
     
     <div className="wrapper">
     
       <p className="Course-name">Sound Desing Masterclass</p>
       <h1>Learn the Art of sound Desing</h1>
       <a href="#" className="demo-btn">
         Demo Class
       </a>
     </div>
     <div>
       
     </div>
     </div>
     </div>
    </header>
  );
};

export default Header;
