import React from 'react';
import {withMy} from './MyState';


class Answer extends Component {
    componentDidMount(){
        this.props.getAnswer()
    }

    render(){
        return(
            <div>
                
            </div>
        )

    }
}
export default withMy(Answer)