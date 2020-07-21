import React from 'react';
import Icons from "./Icons"
import {NavLink} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
        <ul className="navbar-navlist">
          <li><NavLink className="navLink" to="/home">Home</NavLink></li>
          <li><NavLink className="navLink" to="/images">Images</NavLink></li>
          <li><NavLink className="navLink" to="/videos">Videos</NavLink></li>
          <li><NavLink className="navLink" to="/contact">Contact</NavLink></li>
        </ul>
        <Icons></Icons>
      </nav>
    );
}

export default Navbar;