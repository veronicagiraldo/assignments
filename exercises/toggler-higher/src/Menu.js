import React from 'react';
import {withToggler} from './Toggler';

function Menu({on, toggle}) {
    return (
        // <div className="menu1">
        <div>
            <button onClick={toggle}>Menu</button>
            <nav className={on ? "show" : "hide"}>
            <li>Your Profile</li>
            <li>Your Profile</li>
            <li>Your Profile</li>
            <li>Your Profile</li>
            </nav>
        </div>
    )
}
export default withToggler(Menu);