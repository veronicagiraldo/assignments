import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isNumber: false
    }
  }

  handleChange = e => {
    const isNumber = !isNaN(e.target.value)
    this.setState({ isNumber })
  }

  render(){
    return (
      <div>
        <input onChange={this.handleChange}/>
        <h1>{ this.state.isNumber ? "this is a number" : "this is not a number" }</h1>
      </div>
    )
  }

}

export default App;