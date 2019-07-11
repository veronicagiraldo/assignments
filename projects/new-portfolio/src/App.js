import React from "react";
import Nav from './components/Nav'
import About from './components/About.js'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Resume from './components/Resume';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <About 
      name="about"
      className="about"
      />
      {/* <Portfolio 
       name="portfolio"
       className="portfolio"
       />
       <Skills 
        name="Skills"
        className="skills"
        />
        <Resume
        name="resume"
        className="resume"
        />
        <Contact 
          name="contact"
          className="contact"
          /> */}
    </div>
  )
}

export default App