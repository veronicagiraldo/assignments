import React from 'react';
import axios from 'axios'; 
const {Provider, Consumer} = React.createContext()

class MyState extends React.Component{
    constructor(){
        super()
        this.state = {
            trivia: []

        }
    }
    // GET
    getQuestion = () => {
        axios.get('https://opentdb.com/api.php?amount=10').then(res => {
            this.setState({
                trivia: res.data.results
            })
        })
    }
    render(){
        // console.log(this.state.trivia)
        return(
            <Provider value={{
                getQuestion: this.getQuestion,
                ...this.state

            }}>
            {this.props.children}
            </Provider>
        );
    }
}
export default MyState;

export function withMy (C) {
    return props => <Consumer>
                    {value => <C {...value}{...props} />}
                    </Consumer>
}