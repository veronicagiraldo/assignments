import React from 'react';
import{withMy} from './MyState';

class TriviaQ extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category: "",
            difficulty: "",
            question: "",
            type: "",
            correctAnswer: "",
            incorrectAnswer: ""
        }

    }
    componentDidMount(){
        this.props.getQuestion();
    }
  

    render(){
     
        const mappedTrivia = this.props.trivia.map((trivia, i) => {
            return <div>
                <h3>Question:{trivia.question}</h3>
                <h3>Category:{trivia.category}</h3>
                <h4>Difficult:{trivia.difficulty}</h4>
                <h4>Type:{trivia.type}</h4>
                <h4>Correct Answer:{trivia.correct_answer}</h4>
                <h3>{trivia.incorrect_answers}</h3>

               
            </div>
        })
        return(
            // <label>
            //     <input  type="radio"
            //             name=""
            //             value=""
            //             checked=""

            //          />
            // </label>
            <div>
           <h3>{this.state.category}</h3>
           {mappedTrivia}
           </div>
        )
    }
}
export default withMy(TriviaQ);