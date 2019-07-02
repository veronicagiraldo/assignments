import React from 'react';
import axios from 'axios';
// import {Provider} from './index';

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
     theme: "dark",
     reviews: [],
     isLoading: false,
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme(){
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }
  // Data with AuthAxios 
  // getData = () => {
  //   authAxios
  //   .get(`${baseURL}/`)
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {throw err} );
  // }
  getData = () => {
    authAxios
    .get(`${baseURL}/`)
    .then(res => {
      console.log(res.data)
      this.setState({
        reviews:res.data,
        isLoading: false,
      })
    })
    .catch(err => {throw err})
  };
  

  // axios.get(`https://shakespeare.podium.com/api/reviews/&apikey=${API_KEY}`)
  //         .then(res => res.json())
  //         .then(data => {
  //           this.setState({
  //             reviews: data
  //           })
  //         })
  //         .catch(console.log)

  render(){

    // const props = {
    //   toggleTheme: this.toggleTheme,
    //   ...this.state
    // }
    return (
    //return the theme Provider and it's children
      <ThemeContext.Provider value={{
        getData: this.getData,
        getReviews: this.getReviews,
        ...this.state
      }}>
        {this.props.children}
      {/* ADD API CALLS  */}
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