import React from 'react';
import Things from './Things';
import Form from './Form';
import UglyDisplay from './UglyDisplay';
import Why from './Why';
import './app.css'


class App extends React.Component {
    render(){
        return(
            <div>
               
            <Things />
            <UglyDisplay />
            <Why />
            <Form />

        </div>
        )
    }
}

export default App

