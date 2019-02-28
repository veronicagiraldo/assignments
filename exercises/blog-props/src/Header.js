import React from 'react';
import Navbar from './Navbar';
import image from './home-bg.jpg';

const Header = () => {
       

    return (
        <div>
            <img src={image} alt="imageblog"/>
            <Navbar />
        <div className = "header">
            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
             </div>
           </div>
           
    )
    }

export default Header;



