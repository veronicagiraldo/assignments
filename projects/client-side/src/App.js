import React from 'react';
import Home from './Home';
import{Switch, Route} from 'react-router-dom';
import HowTo from './HowTo';
import gameDisplay from './gameDisplay';
// import GameProvider from '/GameProvider';

class App extends React.Component {
  render(){
  return(
    <div>
      <Home />
      <Switch>
          <Route exact path ='/' component={App}/>
          <Route path ='/HowTo' component={HowTo}/>
          <Route path ='/gameDisplay'component={gameDisplay}/>
      </Switch>
    </div>
  )
}
}

export default App