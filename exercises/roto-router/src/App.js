import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import './index.css';


const App = () => {
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/Services' component={Services}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;