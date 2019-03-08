import React from 'react';
import {withMy} from './MyState';


class Answer extends React.Component {
    render(){
        // this.shuffle()
        const mappedAnswers = this.props.incorrectAnswers.map((answer) => {
                    return <h1>{answer}</h1>

               })
        console.log(this.props)
        return(
            <div >
                {mappedAnswers}
                <div onClick={this.props.onClick}>
                <h1>{this.props.answers}</h1>
                </div>
            </div>
        )

    }
}
export default withMy(Answer)