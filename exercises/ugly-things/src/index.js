import React from 'react';
import ReactDom from 'react';
import App from './App';
import './app.css';
export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
    <Provider value={{theme: "dark"}}>
      <App />
    </Provider>,
    document.getElementById("root"))

