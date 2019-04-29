import React from 'react';
import Home from './Component/Home';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Dashbaord from './Component/Dashboard';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path= "/" render={rProps => <Home {...rProps} />}/>
      <Route path="/dashboard" render={rProps => <Dashbaord {...rProps}/>}/>
    </Switch>
    
    </div>
  );
}

export default App;
