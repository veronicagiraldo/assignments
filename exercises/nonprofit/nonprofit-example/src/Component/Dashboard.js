import React from 'react';
import {useToggle} from "../Shared/hooks";


const Dashboard = () => {

  const {toggle, toggler} = useToggle(true)

  return(
    <div>
     <h1>The toggle is {toggle ? "on" : "off"}</h1> 
     <button onClick={toggler}>Toggle</button>
    </div>
  )
}

export default Dashboard; 
