import React from 'react';
import {Consumer} from './index';
import {withTheme} from './ThemeProvider';
import './app.css'; 

const Header = props => (
    <div>
<Consumer>
  {value => (
    <div className={`${value.theme}-header`}>
        <h1>Wicked Rad Header</h1>
        <button>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
  )}
  </Consumer>
  </div>
)

// const Header =({theme, toggleTheme}) => (
//     <div className={`${theme}-header`}>
//         <h1>Wicked Rad Header</h1>
//         <button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"} </button>
//     </div>
// ) 
export default withTheme(Header)
// Consumer exposes its value through props.children
  

