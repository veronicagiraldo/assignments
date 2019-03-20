import React, { Component} from 'react';
import { withGlobal } from './GlobalProvider';

class Form extends Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isJedi: '',
      bountyAmount: '',
      image: '',
    }
  }
 
  handleChange = e => {
    // console.log(e.target)
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    // console.log(this.state) 
    e.preventDefault()
    this.props.postBounty(this.state)
  }

  render(){
    // console.log(this.state)
    return(
      <div> 
         <h1>Create new bounty</h1>

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
                  placeholder = "Bounty Amount"
                  name = "bountyAmount"
                  value = {this.state.bountyAmount}
                  onChange = {this.handleChange} 
                  /> 
          <input  type = "text"
                  placeholder = "is Jedi"
                  name ="isJedi"
                  value = {this.state.isJedi}
                  onChange = {this.handleChange}
                  />
          {/* <input  type = "boolean"
                  placeholder = "living"
                  name ="living"
                  value = {this.state.living}
                  onChange = {this.handleChange}
                  /> */}
          <input  type = "text"
                  placeholder = "image"
                  name= "image"
                  value= {this.state.image}
                  onChange = {this.handleChange}
                  />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withGlobal(Form);