import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      city: '',
      country: '',
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
    city: '',
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
              value={this.state.city}
              type="text"
              placeholder="city"
              name="city"
              // value=""
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