import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isTrue : false
    }
  }

  changeIt = () => {
    this.setState((prevState) => {
      return {
        isTrue: !prevState.isTrue
      }
    })
  }
  render() {
    let itIs = this.state.isTrue ?
    <div>
      
        <i class="fas fa-thumbs-up"></i>
        <h1> Like </h1>
    </div>
    : 
    <div>
      <i class="fas fa-thumbs-down"></i>
      <h1>Dislike</h1>
    </div>
    return (
      <div>
        {itIs}
        <button onClick={this.changeIt}>Click Me</button>
        
      </div>
    )
 
}
}

export default App;
