import React from 'react';
import axios from 'axios'; 
const {Provider, Consumer} = React.createContext()



class MyState extends React.Component{
    constructor(){
        super()
        this.state = {
            trivia: [], 
            answers:[],
            incorrectAnswers: []
        }
    }
    // GET
    getQuestion = () => {
        axios.get('https://opentdb.com/api.php?amount=1').then(res => {
            console.log(res.data.results[0].correct_answers)
            const shuffled = this.shuffle([...res.data.results[0].incorrect_answers, res.data.results[0].correct_answer])
            this.setState({
                trivia: res.data.results,
                // answers: res.data.results[0].correct_answer,
                incorrectAnswers: shuffled
            })
            // console.log(answers)
        })
    }

    shuffle = (incorrectAnswers) =>  {
        const newArr = []
        while (incorrectAnswers.length !== 0){
            let rand = incorrectAnswers[Math.floor(Math.random()*incorrectAnswers.length)]
            newArr.push(rand)
            incorrectAnswers.splice(incorrectAnswers.indexOf(rand), 1)
        }
        return newArr
    }
    // onClick = (e) =>{
    //     if(onClick === this.state.answers){
    //         return "you're Right!!"
    //     }else{
    //         return "you suck!"
    //     }
    // }
    render(){
        // console.log(this.state.answers)
        // console.log(this.state.incorrectAnswers)
        return(
            <Provider value={{
                getQuestion: this.getQuestion,
                onClick: this.onClick,
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