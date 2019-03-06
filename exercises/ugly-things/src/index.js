import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
// import ThemeProvider from './ThemeProvider'
export const {Consumer, Provider} = React.createContext()


ReactDOM.render(
    <Provider>
    <Header />
    </Provider>, 
    document.getElementById("root")
    )

