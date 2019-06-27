import React from 'react';
import People from './People';

class State extends React.Component{
  constructor(){
    super()
    this.state={
      people: [], //store api request
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then((data) => {
        this.setState({people: data})
      })
      // .catch(console.log)
  }
  
  // getNames = () => {
  //   fetch("https://swapi.co/api/people/")
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({people: data})
  //     })
  //     .catch(console.log)
  // }
 

  render(){
    return(
     
      <People people={this.state.people}/>
    )
  }

}
export default State;