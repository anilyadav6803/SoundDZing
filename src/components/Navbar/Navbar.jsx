import React from "react";
import "./Navbar.css";
import {menuIcon} from  '../../assets/index'
const Navbar = () => {
  return (
    <nav className="tul">
      <a href="#" className="logo">
        Sound<span className="">DZing</span>{" "}
      </a>
      <ul href='#'>
        <li>
          <a href="#Topic"> Coures Details</a>
        </li>
        <li >
          <a href="#Sinfo">About</a>
        </li>

        <li >
          <a href="#Blog">Blog</a>
        </li>
        <li >
          <a href="Testinomials">Testimonials</a>
        </li>
      </ul>
         
      <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>

    
    </nav>
  );
};

export default Navbar;
