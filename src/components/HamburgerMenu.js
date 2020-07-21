import React from 'react';

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
              <li><a href="home" onClick = {uncheckHam}>Home</a></li>
                <li><a href="images" onClick = {uncheckHam}>Images</a></li>
                <li><a href="videos" onClick = {uncheckHam}>Videos</a></li>
                <li><a href="contact" onClick = {uncheckHam}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HamburgerMenu;
