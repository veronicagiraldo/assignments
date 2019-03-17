import React, { Component} from 'react';
import { withGlobal } from './GlobalProvider';

class Form extends Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isJedi: '',
      bountyAmount: ''
    }
  }
  componentDidMount(){
        console.log(this.props)
        this.props.getBounty();
    }
  handleChange = e => {
    // console.log(e.target)
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e =>{
    console.log(this.state)
    e.preventDefault()
    this.props.postBounty(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type = "text"
                  placeholder = "first name"
                  name ="firstName"
                  value = {this.state.firstName}
                  onChange = {this.handleChange}
                  />
          <input  type = "text"
                  placeholder = "last Name"
                  name = "lastName"
                  value = {this.state.lastName}
                  onChange = {this.handleChange} 
                  /> 
          <input  type = "number"
                  placeholder = "bountyAmount"
                  name = "bountyAmount"
                  value = {this.state.bountyAmount}
                  onChange = {this.handleChange} 
                  /> 
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withGlobal(Form);