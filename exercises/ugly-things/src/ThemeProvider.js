import React from 'react';
import {Provider, Consumer} from './index'

class ThemeProvider extends React.Component{
  constructor(){
    super()
    this.state = {
     theme: "dark"
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme(){
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }

  render(){
    const props = {
      toggleTheme: this.toggleTheme,
      ...this.state
    }
    return (
    //return the theme Provider and it's children
      <Provider value={props}>
        {this.props.children}
      </Provider>
    )
  }
}
export default ThemeProvider

export const withTheme = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )
