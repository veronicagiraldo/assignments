import React from 'react';
import {withToggler} from './Toggler';

function Card({on, toggle}) {
    return ( 
        <div onClick={toggle}>
            <h3 className={on ? "star" : "unstar"}> I am a card</h3>
        </div>
    )
}

export default withToggler(Card);