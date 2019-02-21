import React from 'react';
import Navbar from './Navbar.js';
import Map from './Map.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';


const App = () => {
    return (
        <div>
        <Header />
        <Navbar />
        <Home />
        <Map />
        <Footer />
        </div>
    )
}

export default App; 