import React from 'react';
import Toggle from './shared/Toggle.js'

const App = () => {
    return (
        <div>
            <Toggle render = {({isToggled, toggler}) =>
            <>
            <h1>The Light is {isToggled ? "on" : "off"} </h1>
            <button onClick={toggler}>Light Switch</button>
            </>
        }/>
            <Toggle render = {({isToggled: on, toggler: toggle}) => 
            <>
             <h1>The Light is {on ? "on" : "off"} </h1>
             <button onClick={toggle}>Light Switch</button>
             </>
        
        }/>
             <Toggle render = {({isToggled: on, toggler: toggle}) => 
            <>
             <h1>{on ? "black" : "white"} </h1>
             <button onClick={toggle}>black or white</button>
             </>
        
        }/>

        </div>
    )
}

export default App