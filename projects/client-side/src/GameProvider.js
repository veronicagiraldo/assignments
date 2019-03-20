import React from 'react';
// import axios from 'axios';

const {Consumer, Provider} = React.createContext() 

class GameProvider extends React.Component{
  constructor(){
    super()
    this.state ={
      sun: false,
      water: false,
      seed: false,
    }
  }
  // GET info from DB about harvest

  // clickSeed = 
  // clickWater
  // clickSun
  render(){
    return(
      <Provider value= {{
        ...this.state
      }}>
      {this.props.children}
      </Provider>
    );
  }
}

export default GameProvider;

export function withGame (C) {
  return props => <Consumer>
                {value => <C {...value}{...props}/>}
                 </Consumer>
}
