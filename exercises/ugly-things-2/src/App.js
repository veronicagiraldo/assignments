import React from 'react';
import Things from './Things';
import Form from './Form';

class App extends React.Component {
    render(){
        return(
            <div>
                <Form />
            <Things />
        </div>
        )
    }
}

export default App

