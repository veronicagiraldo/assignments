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
        console.log(this.props.getQuestion)
        this.props.getQuestion();
    }
  

    render(){
     
        const mappedTrivia = this.props.trivia.map((trivia, i) => {
            console.log(this.props.trivia)
            return <div>
                <h1>{trivia.question}</h1>
                {/* <h2>Category:{trivia.category}</h2> */}
                {/* <h4>Difficult:{trivia.difficulty}</h4> */}
                <select>
                   <h4>{trivia.correct_answer} {trivia.incorrect_answers}</h4>                 
                </select>
             
               
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
                   
           {/* <h3>{this.state.category}</h3> */}
           {mappedTrivia}
           </div>
        )
    }
}
export default withMy(TriviaQ);