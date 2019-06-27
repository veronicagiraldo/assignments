import React from 'react';

class State extends React.Component{
  constructor(){
    super()
    this.state={
      people: [],
      name: '',
      isLoading: false,
    }
  }
  componentDidMount(){
    this.getNames();
    this.setState({ isLoading: true});
  }
  
  getNames = () => {
    fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(response => {
      console.log(response)
      this.setState({
        people: response,
        isLoading: false,
        // name: results.data,
        })
      })
      // .catch()
  }

  render(){
    const {people, isLoading} = this.state;
    if(isLoading){
      return<p><i class="fas fa-meh"></i>Loading...</p>
    }
    return(
      <div>
      {people}
     
      </div>
    )
  }

}
export default State;