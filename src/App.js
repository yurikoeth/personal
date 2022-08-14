import React from 'react';
import Hero from "./components/Hero.js";
import About from './components/About.js';
import MobileContact from './components/MobileContact.js';
import DesktopContact from './components/DesktopContact.js';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <MobileContact/>
      <DesktopContact/>
    </div>
  );
}

export default App;
