import React from 'react';
import axios from 'axios'; 
const {Provider, Consumer} = React.createContext()


class MyState extends React.Component{
    constructor(){
        super()
        this.state = {
            trivia: [], 
            answers:[],
            incorrectAnswers: [],
            isRight: false,
            youSuck: false,  
        }
    }
    // GET
    getQuestion = () => {
        axios.get('https://opentdb.com/api.php?amount=1').then(res => {
            // console.log(res.data.results[0].correct_answers)
            const shuffled = this.shuffle([...res.data.results[0].incorrect_answers, res.data.results[0].correct_answer])
            this.setState({
                trivia: res.data.results,
                answers: res.data.results[0].correct_answer,
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
    clicked = (chosen) =>{
        console.log(this.state.isRight)
        if(chosen === this.state.answers){
           this.setState({
               isRight: true
           }, () => {
                setTimeout(()=>{
                    window.location.reload();
                }, 2000)
           })
        }else{
            this.setState({
                youSuck: true
            })
            setTimeout(()=>{
                this.setState({youSuck: false})
            }, 1000)
    
        }
    }

    // style.css= .app__settings {
//   max-width: 550px;
//   margin: 0 auto;
// }

// .app__confetti {
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }


    render(){
        // console.log(this.state.answers)
        // console.log(this.state.incorrectAnswers)
        return(
            <Provider value={{
                getQuestion: this.getQuestion,
                clicked: this.clicked,
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