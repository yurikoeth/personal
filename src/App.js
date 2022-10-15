import React from 'react';
import {Helmet} from 'react-helmet'
import Hero from "./components/Hero.js";
import About from './components/About.js';
import MobileContact from './components/MobileContact.js';
import DesktopContact from './components/DesktopContact.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Mangin.io</title>
                <meta name="description" content="Tesean Mangin's online portfolio." />
            </Helmet>
      <Hero/>
      <About/>
      <Projects/>
      <MobileContact/>
      <DesktopContact/>
    </div>
  );
}

export default App;
