import React from 'react';
import axios from 'axios';
import Lodash from 'lodash';
// import {Provider} from './index';

const ThemeContext = React.createContext()

const baseURL = 'https://shakespeare.podium.com/api/reviews';
const token = 'H3TM28wjL8R4#HTnqk?c'

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key': token}
});
// all reviews with a single button
// save all ids from request in array in this.state.
// allReviews: []
// then shuffle them ()

// one review on a button click and submit a post request for a get one with the ID
// then you shuffle this.state.allShakeSpearRevies


class ThemeProvider extends React.Component{
  constructor(){
    super()
    this.state = {
     reviews: [],
     isLoading: false,
     single: [],
     allShakespearReviews: [],
     shuffledReviews: []
    }
    // this.toggleTheme = this.toggleTheme.bind(this)
  }
  // theme-toggle
  // toggleTheme(){
  //   this.setState(prevState => ({
  //     theme: prevState.theme === "dark" ? "light" : "dark"
  //   }))
  // }
  getData = () => {
    authAxios
    .get(`${baseURL}/`)
    .then(res => {
      console.log(res.data);
      this.setState({
        reviews: res.data,
        isLoading: false,
        allShakespearReviews: res.data
      }, () => this.shuffleReviews())
    })
    .catch(err => {throw err})
  };
  shuffleReviews =() =>{
    this.setState({
      shuffledReviews: Lodash(this.state.allShakespearReviews)
    })
  }

  getOne =(id) => {
    authAxios
    .get(`${baseURL}/:${id}`)
    .then(res =>{
      console.log(res.data)
      this.setState({})
    })
    .catch(err => {throw err});
  }

  render(){
    return (
      <ThemeContext.Provider value={{
        getOne: this.getOne,
        getData: this.getData,
        ...this.state
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
export default ThemeProvider;

export const withTheme = C => props => (
  <ThemeContext.Consumer>
    {value => <C {...value}{...props}/>}
  </ThemeContext.Consumer>
)