import React from 'react';

function HamburgerMenu(){
    return(
        <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
              <li><a href="#home">Home</a></li>
                <li><a href="#about">Images</a></li>
                <li><a href="#services">Videos</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HamburgerMenu;
