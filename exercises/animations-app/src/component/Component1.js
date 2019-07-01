import React from 'react'
import { Spring} from 'react-spring/renderprops';

const Component1 = ()=> {
  return (
     <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{opacity:1, marginTop: 0 }}
     >
       {props => (
         <div style={props}>
          <div style={c1Style}>
            <h1>component 1 </h1>
            <p>i am a text</p>
            <Spring
              from={{number: 0}}
              to={{number:10}}
              config={{duration: 1000}}
            >
            {props =>(
              <div style={props}>
                <h1 style={counter}>{props.number.toFixed()}</h1>
              </div>
            )}
            </Spring>
          </div>
         </div>
       )}
     </Spring>
  )
}
const c1Style= {
  background: 'pink',
  color: 'white', 
  padding: '1.5em'
}
const counter={
  background: '#333',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1remauto'
}
export default Component1;