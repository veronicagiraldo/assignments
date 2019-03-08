import React from 'react';
import {withMy} from './MyState';
import Answer from './Answer';

class TriviaQ extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category: "",
            difficulty: "",
            question: "",
            type: "",

        }
    }
    componentDidMount(){
        this.props.getQuestion();
    }
    render(){
        // console.log(this.props)
        const mappedTrivia = this.props.trivia.map((trivia, i) => {
            // console.log(this.props.trivia[0].incorrect_answers)
            return(
                <div key= {i}>
                <h1> {trivia.question}  </h1>  
             </div>
            )
        })
        return(
            <div className="main">
                <div className="container">
                    {mappedTrivia}
                    <Answer />

                </div>
             </div>
        )
    }
}
export default withMy(TriviaQ);