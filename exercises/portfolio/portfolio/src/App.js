import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Foot from './Foot';
import Resume from './Resume';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
          {/* <Navbar />  */}
          <Switch>
            <Route path = '/' Component={Home}/> 
            <Route path = '/about' component={About}/>
            <Route path = '/resume' component={Resume}/>
            <Route path = '/projects' component={Projects}/>
          </Switch> 
          <Foot /> 
      </div>
    );
  }
}

export default App;
