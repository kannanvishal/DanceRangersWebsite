import React from 'react';
import {NavLink} from "react-router-dom";

function HamburgerMenu(){

    function uncheckHam(){
        let menuOpen = document.querySelector('.toggler').checked;

        if(menuOpen === true){
            document.querySelector('.toggler').checked = false;
        }
    }

    return(
        <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
              <li><NavLink to="/home" onClick = {uncheckHam}>Home</NavLink></li>
                <li><NavLink to="/images" onClick = {uncheckHam}>Images</NavLink></li>
                <li><NavLink to="/videos" onClick = {uncheckHam}>Videos</NavLink></li>
                <li><NavLink to="/contact" onClick = {uncheckHam}>Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HamburgerMenu;
