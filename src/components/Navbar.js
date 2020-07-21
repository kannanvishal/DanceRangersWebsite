import React from 'react';
import Icons from "./Icons"

function Navbar(){
    return(
        <nav className="navbar">
        <ul className="navbar-navlist">
          <li><a className="navLink" href="home">Home</a></li>
          <li><a className="navLink" href="images">Images</a></li>
          <li><a className="navLink" href="videos">Videos</a></li>
          <li><a className="navLink" href="contact">Contact</a></li>
        </ul>
        <Icons></Icons>
      </nav>
    );
}

export default Navbar;