import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{

  render(){
    return(
     <Navbar class="nav">
        <Link className="navLinks" to='/' >HOME</Link>
        <Link className="navLinks" to='/about' >ABOUT</Link>
        <Link className="navLinks" to='/resume' >RESUME</Link>
        <Link className="navLinks" to='/contact'>PROJECTS</Link>
    </Navbar>
    )
  }
}
export default Navbar;