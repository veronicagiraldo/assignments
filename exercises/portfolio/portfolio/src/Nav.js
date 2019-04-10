import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import vg2 from './images/vg2.svg';
import {Navbar} from 'react-materialize';

// import About from './About';
// import NavItem2 from './Resume';

const Nav = () => {

    return(
      <Navbar class="nav-wrapper">
            
            <img class="vg center" src={vg2} alt="vg"></img>
            {/* <a href="#"img src="portfolio/src/images/vg2.svg" class="brand-logo center">Logo</a> */}
            {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
            <ul class="center">
            {/* <ul id="nav-mobile" class="left hide-on-med-and-down"> */}
              {/* <Link to="/about">About me</Link> */}
              <li><a href="portfolio/src/About.js">About Me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/resume">Resume</a></li>
            </ul>

    </Navbar>
    )
}
export default Nav;