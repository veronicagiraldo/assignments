import React from 'react';
import {withThings} from './Things';
import Form from './Form';

class Why extends React.Component{
    constructor(){
        super()
        this.state={
            toggled: true
        }
    }

    toggle = () =>{
        console.log("why!")
        this.setState(prevState` =>({
            toggled: !prevState.toggled
        }))
    }
    render(){
        let {ugly, deleteUgly} = this.props;
        return(
            <div>
                {this.state.toggled ?
                    <div className="ugly">
                    <h2>{ugly.title}</h2>
                    <p>{ugly.description}</p>
                    <button onClick={() => deleteUgly(ugly._id)}>Delete</button>
                    <button onClick={this.props.toggle}>Edit</button>
                    </div>
                :
                <Form button="save changes" type="edit"/>
                 }

            </div>
        );
    }
}

export default withThings(Why)
