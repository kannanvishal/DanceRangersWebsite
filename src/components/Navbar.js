import React from 'react';

function Navbar(){
    return(
        <nav className="navbar">
        <ul className="navbar-navlist">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Images</a></li>
          <li><a href="#services">Videos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;