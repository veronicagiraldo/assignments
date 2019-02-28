import React, {Component} from 'react';
import Badge, 


class Form extends Component {
   
}

this.state ={
        input = {
            firstName = '',
            lastname
            etc....
            },
            badge = []
}

handleChange = e => {
    // console.log()
    this.setState({[e.target.name]: e.target.value})
        return {
            inputs: {
                ...prevState.inputs,
                [e.target.name]: e.target.value
            }
        }
}

handleSubmit = e => {
    e.preventDefault()
    // const newBadge = this.state.inputs;
    this.setState(prevState => {
        return {
            badges: [prevState.inputs, ...prevState.badges]
            inputs: {firstName = '',
                    lastname
                    etc....
                    },
        }
    })
}

render() {
let {firstName, lastName, etc} = this.state
}
// create a Badge.js Component 
const mappedBadges = badges.map((badge, i) => <Badge key = {badge.firstName = i } badge={badge } />)

<React.Fragment>4
{/* <form onSubmit= {this.handleSubmit}></form> */}
<form> input type/ name/ placeholder/ value/ onchange=this.handlechange/ 
value= {this.state.firstname}
after input info add button:
{/* <button>submit</button> */}
controlled component- change the state- write a method to change.
<React.Fragment/>  =- replace Div in the beginning 


