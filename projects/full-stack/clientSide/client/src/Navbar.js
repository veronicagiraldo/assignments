import React from 'react';
import {Link} from 'react-router-dom'
import { withContext } from './AppContext';

function Navbar (props){
    return(
      <div>
        <Link className="navLinks" to='/' >Home</Link>
        <Link className="navLinks" to='/About' >About</Link>
        <Link className="navLinks" to='/Blog' >Blog</Link>
        <Link className="navLinks" to='/Contact'>Contact Us</Link>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }
export default withContext(Navbar);