import React from 'react';
import Hero from "./components/Hero.js";
import About from './components/About.js';
import MobileContact from './components/MobileContact.js';
import DesktopContact from './components/DesktopContact.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Projects/>
      <MobileContact/>
      <DesktopContact/>
    </div>
  );
}

export default App;
