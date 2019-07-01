import React, { Component } from 'react'

export default class Component3 extends Component {
  render() {
    return (
      <div style={c3Style}>
        <h1>Component 3</h1>
        <p>compo 3 info</p>
      </div>
    )
  }
}
const c3Style= {
  background: 'grey',
  color: 'white', 
  padding: '1.5em 1.5em 1.5em 1.5em'
}