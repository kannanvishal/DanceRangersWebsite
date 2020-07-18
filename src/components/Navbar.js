import React from 'react';

function Navbar(){
    return(
        <nav className="navbar">
        <ul className="navbar-navlist">
          <li><a className="navLink" href="#home">Home</a></li>
          <li><a className="navLink" href="#about">Images</a></li>
          <li><a className="navLink" href="#services">Videos</a></li>
          <li><a className="navLink" href="#contact">Contact</a></li>
        </ul>

        <div className="icons">
            <a href="https://www.facebook.com/dancerangers04/" title="Dance Rangers on Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/channel/UC85-G-adJ6PM0NDP7YWnrcg" title="Dance Rangers on Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/dancerangers/?hl=en" title="Dance Rangers on Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="mailto:dancerangers04@gmail.com" title="Email  to Dance Rangers"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        </div>
      </nav>
    );
}

export default Navbar;