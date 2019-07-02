import React from 'react';
import './App.css';
// import Header from './Header'
import {withTheme} from './ThemeProvider';
import {Switch, Route} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Nav from './component/Navbar'
import DisplayReviews from './component/DisplayReviews'
// import DisplayApp from './component/DisplayApp';
import ReviewContent from './content/ReviewContent'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Nav/>
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/contact" component={Contact}/>
        </Switch>
        <DisplayReviews />
        <ReviewContent />
        {/* < DisplayApp /> */}
        {/* <Header /> */}
      </div>
    );
  }
}

export default withTheme(App);
