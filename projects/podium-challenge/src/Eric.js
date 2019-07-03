import React, { Component } from 'react';
import axios from 'axios';


const baseURL = 'https://shakespeare.podium.com/api/reviews';
const token = 'H3TM28wjL8R4#HTnqk?c'

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key': token}
});


class App extends Component {

  getData = () => {
    authAxios
    .get(`${baseURL}/`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {throw err} );
  }
  
  render(){
    return (
      <div className="App">
        App
        { this.getData() }
      </div>
    );
  }
  
}

export default App;
 
getOne = (id) => {
  authAxios
  .get(`${baseURL}/${id}`)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {throw err});
}

onClick={() => this.getOne(id)} 

class App extends Component {
  constructor(){
    super()
    this.state = {
        allShakespearReviews: [],
        shuffledReviews: []
    }
}

  getData = () => {
    authAxios
    .get(`${baseURL}/`)
    .then(res => {
      console.log(res.data);
      this.setState({allShakespearReviews: res.data})
    }, () => this.shuffleReviews())
    .catch(err => {throw err} );
  }

  shuffleReviews = () => {
    this.setState({
      shuffledReviews: Lodash(this.state.allShakespearReviews)
    })
  }

