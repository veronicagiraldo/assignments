import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';

export class Component2 extends Component {
  render() {
    return (
      <div>
        <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000}}
     >
       {props => (
         <div style={props}>
          <div style={c2Style}>
            <h1>component 1 </h1>
            <p>i am a text</p>
            <button style={btn} onClick={this.props.toggle}>
            Toogle Component3
            </button>
          </div>
         </div>
       )}
     </Spring>
      </div>
    )
  }
}

const c2Style= {
  background: 'purple',
  color: 'white', 
  padding: '1.5em'
}
const btn ={
  background: 'pink',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
}
export default Component2

