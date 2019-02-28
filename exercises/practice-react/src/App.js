import React ,{Component} from 'react';

class App extends Component {
    constructor (){
        super ()

        this.state ={
            counter: 3
        }
    }

    add = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    sub =() => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    reset =() => {
        this.setState({counter: 0})
    }

    render () {
        return (
            <div>
                Hello 
                <h1> counter: {this.state.counter}</h1>
                <button onClick={this.add}>+</button>
                <button onClick ={this.sub}>-</button>
                <button onClick ={this.reset}>reset</button>
            </div>
        )
    }

}

export default App;