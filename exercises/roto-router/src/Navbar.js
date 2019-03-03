import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
        </div>
    )

}

export default Navbar;
