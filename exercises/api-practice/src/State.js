import React from 'react';
// import People from './People';

class State extends React.Component{
  constructor(){
    super()
    this.state={
      loading: false,
      character: {}, //store api request
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/1')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          loading: false,
          character: data
        })
      })
      // .catch(console.log)
  }

  render(){
    const text = this.state.loading ? "loading.." : this.state.character.name
    return(
      <div>
        <p>{text}</p> 
         </div>
    )
  }

}
export default State;