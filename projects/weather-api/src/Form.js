import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      zipCode: '',
      country: ''
    }
  }
  handleChange =(e) => {
    e.persist();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  clearInputs = () => {
    this.setState({
    zipCode: '',
    country: ''
    })
  }

  render(){
    return(
      <div className="Form">
        <form>
              City:
              <input
              onChange={this.handleChange}
              value={this.state.zipCode}
              type="zipCode"
              placeholder="zipCode"
              name="zipCode"
               />
               Country: <input 
               onChange={this.handleChange}
               value={this.state.country}
               type="text" 
               placeholder="country" 
               name="country"
               />
               <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Form;