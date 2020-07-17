import React from 'react';

import Navbar from './components/Navbar';
import Images from './components/Images';
import HamburgerMenu from './components/HamburgerMenu'

function App() {
  return (
    <div className ="App">
      <Navbar></Navbar>
      <Images></Images>
      <HamburgerMenu></HamburgerMenu>
    </div>
  );
}

export default App;
