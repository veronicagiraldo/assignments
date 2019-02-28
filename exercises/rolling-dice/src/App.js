import React, {Component} from 'react';
import DiceBox from './DiceBox';

class App extends Component {
    constructor(){
        super()
        this.state ={
            dice1: Math.ceil(Math.random()*6),
            dice2: Math.ceil(Math.random()*6),
            dice3: Math.ceil(Math.random()*6),
            dice4: Math.ceil(Math.random()*6),
            dice5: Math.ceil(Math.random()*6),
            dice6: Math.ceil(Math.random()*6),
        }
    }
    const mappedDiceBox = props

    render(){
        return (
            <div className="container">
            <div className="box" >{this.state.dice1}</div>
            <div className="box" >{this.state.dice2}</div>
            <div className="box" >{this.state.dice3}</div>
            <div className="box" >{this.state.dice4}</div>
            <div className="box" >{this.state.dice5}</div>
            <div className="box" >{this.state.dice6}</div>
            <button onClick={this.state}>Redo</button>
            </div>
        
        )
    }
}

export default App; 