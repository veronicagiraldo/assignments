import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counter: 0
    }
  }
  render(){
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">the Counter is currently{this.state.counter}</h1>
        <button 
        data-test="increment-button"
        onClick={() => this.state.counter}>increment button</button>
      </div>
    );
  }
}

export default App;
