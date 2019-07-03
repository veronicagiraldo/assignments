import React from 'react';
import './App.css';
// import Header from './Header'
import {withTheme} from './ThemeProvider';
import {Switch, Route} from 'react-router-dom';

import Home from './component/Home'
import About from './component/About'
import Nav from './component/Navbar'

import DisplayReviews from './component/DisplayReviews'
import ReviewContent from './content/ReviewContent'
import SingleDisplay from './component/SingleDisplay';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Nav/>
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
        </Switch>
        <DisplayReviews />
        <ReviewContent />
        <SingleDisplay />
      </div>
    );
  }
}

export default withTheme(App);
