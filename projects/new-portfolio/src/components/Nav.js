import React, { Component } from 'react'
// import * as Scroll from 'react-scroll'
import { Link, animateScroll as scroll} from 'react-scroll'
import '../styles/navbar.css'
import logo from '../images/vg.svg'



export default class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  handleSetActive = (to) =>{
    console.log(to)
  }
  render() {
    
    return (
      <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo}
             className="nav-logo"
             alt="logo"
             onClick={this.scrollToTop}
             />
        <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={this.handleSetActive}
              >
               About
              </Link>
            </li>
              {/* <Link 
              activeClass="active" 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              onSetActive={this.handleSetActive}
              >
                About
              </Link> */}
            <li className="nav-item">
              <Link 
              activeClass="active" 
              to="portfolio" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              delay={1000}
              onSetActive={this.handleSetActive}
              >
               Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              activeClass="active" 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              delay={1000}
              onSetActive={this.handleSetActive}
              >
              Skills
              </Link>
              </li>
              <li className="nav-item">
              <Link 
              activeClass="active" 
              to="resume" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              delay={1000}
              onSetActive={this.handleSetActive}
              >
               Resume
              </Link>
              </li>
              <li className="nav-item">
              <Link 
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              delay={1000}
              onSetActive={this.handleSetActive}
              >
               Contact
              </Link>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}
