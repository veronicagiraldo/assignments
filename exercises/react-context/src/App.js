import React, {Component} from 'react';
// Import Switch, Route 
import {Switch, Route} from 'react-router-dom';
// import every component on the home page
import Navbar from './Navbar';
import Footer from './Footer';
// import Link to pages
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
// import CSS 
import './app.css';
// // import Toggler 
import Toggler from './Toggler'




class App extends Component {
    constructor() {
        super() 

        this.state ={

        }
    }


    render() {
        return(
            <div>
                <Navbar />
                <Toggler />
                <Switch>
                    <Route exact path ='/' component = {Home}/>
                    <Route path = '/about' component = {About}/>
                    <Route path = '/contact' component = {Contact}/>
                    <Route path = '/services' component = {Services}/>
                </Switch>
              
                <Footer />
            </div>
        )
    }
}

export default App;