import React from 'react';

import Navbar from './components/Navbar';
import Images from './components/Images';
import HamburgerMenu from './components/HamburgerMenu';

import $ from 'jquery';

function App() {

    $(window).scroll(function() {
        if( $(this).scrollTop()) {
          $(".header").addClass("sticky");
        } else {
          $(".header").removeClass("sticky");
        }
    });

  return (
    <div className ="App">
      <div className="header">
        <Navbar/>
        <HamburgerMenu/>
      </div>
      <Images/>
    </div>
  );
}

export default App;
