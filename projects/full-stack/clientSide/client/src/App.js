import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Listing from './Listing';
// import logo from './logo.svg';

class App extends Component {
  render() {
    const { token, logout} = this.props
    return (
      <div className="Real-Estate">
      <Navbar />
        <header className="AppContainer">
          Real Estate Website
          <Switch>
            <Route exact path ='/' component ={Home}/>
            <Route path ='/About' component ={About}/>
            <Route path ='/Blog' component ={Blog}/>
            <Route path ='/Contact' component={Contact}/>
            <Route path ='/Listing' component={Listing}/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
