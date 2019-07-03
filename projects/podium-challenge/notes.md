# Front End Coding Assessment

It’s worth mentioning that we care about testing our code here at Podium, and it would be beneficial for you to demonstrate how you test in the challenge as well.

Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn’t have the chops to finish out the UI. That’s where you come in, your task is to build a client side app for Shakespeare’s API. The **design** of the application is up to you.
**Endpoints:**

Two endpoints exist for this API.

1. **Reviews Index**

    - **GET** [https://shakespeare.podium.com/api/reviews](https://shakespeare.podium.com/api/reviews)
    - Response looks like this:
        {
        "rating": 4.1,
        "publish_date": "2016-09-03T23:25:47.642545Z",
        "id": "9784620626604",
        "body": "How bitter a thing it is to look into happiness through another man's eyes!",
        "author": "Tatyana Olson"
    }

<!-- all of the reviews -->

2. **Reviews Show**

    - **GET** [https://shakespeare.podium.com/api/reviews/:id](https://shakespeare.podium.com/api/reviews/:id)
    - Response looks like this:

<!-- one at a time -->
Test: 
FrontEnd- UI :
  display: all reviews,
  display: one single review 

  const mappedVacationSpots = vacationSpots.map((vacationSpot, i) =>{
        let backgroundColor;
        if (vacationSpot.timeToGo === "Spring"){
            backgroundColor = "pink";
        } else if (vacationSpot.timeToGo === "Winter"){
            backgroundColor = "blue";
        } else if (vacationSpot.timeToGo === "Fall"){
            backgroundColor = "orange"; 
        } else if (vacationSpot.timeToGo === "Summer"){
            backgroundColor = "red";
        }

        return (
                <Cards key={i+vacationSpot.place} place={vacationSpot.place} price={vacationSpot.price} timeToGo={vacationSpot.timeToGo} backgroundColor={backgroundColor}/>
           
        )
    })

    return (
        <div>
            <h1 style={styles}>Vacation Spots</h1>
            {mappedVacationSpots}
        </div>
    )
trivia question:
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
                    
}