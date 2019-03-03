import React from 'react';

import {withToggler} from './path/to/Toggler.js'

function Card({ on, toggle}) {
    return (
        <div className= "card">
            <h3>My Sweet Repo</h3>
            <p>my sweet</p>
            <button onClick={toggle}> {on ? "unstar" : "star" }</button>
        </div>
    )
}

// call withToggler with Card as an argument
export default withToggler(Card);