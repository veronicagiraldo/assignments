import React from 'react';
import axios from 'axios';

var shuffle = require('lodash.shuffle')
const ThemeContext = React.createContext()

const baseURL = 'https://shakespeare.podium.com/api/reviews';
const token = 'H3TM28wjL8R4#HTnqk?c'
const authAxios = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key': token}
});

class ThemeProvider extends React.Component{
  constructor(){
    super()
    this.state = {
     reviews: [],
     isLoading: false,
     single: [],
     allShakespearReviews: [],
     shuffledReviews: [],
     isViewingSingleReview: false,
     toggleOn: true,
    //  catImage : []
    }
  }
  handleClick = () => {
    this.setState(({toggleOn}) => ({toggleOn: !toggleOn}))
  }
  // getALL
 getData = () => {
    authAxios 
    .get(`${baseURL}/`)
    .then(res => {
      this.setState({
        reviews: res.data,
        isLoading: false,
        allShakespearReviews: res.data
      })
    })
    .catch(err => {throw err})
  };
  
  // getONE
  getOne =() => {
    let id = this.state.shuffledReviews[0].id
    authAxios
    .get(`${baseURL}/${id}`)
    .then(res =>{
      this.setState({ 
        single: res.data
      })
    })
    .catch(err => {throw err});
  }

  shuffleReviews =() =>{
    this.setState({
      shuffledReviews: shuffle(this.state.allShakespearReviews),
      isViewingSingleReview: !this.state.isViewingSingleReview,
    }, () => this.getOne())
  };

  render(){
    return (
      <ThemeContext.Provider value={{
        toggle: this.toggle,
        getOne: this.getOne,
        getData: this.getData,
        shuffleReviews: this.shuffleReviews,
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