import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) =>{
    return (
        <div className ="nav">
            <Link to ="Home">Home</Link>
            <Link to = "About">About</Link>
            <Link to ="Contact">Contact</Link>
            <Link to ="Services">Services</Link>
        </div>
    )


}

export default Navbar; 