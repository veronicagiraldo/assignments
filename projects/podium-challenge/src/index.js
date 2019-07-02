import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './ThemeProvider'
import {BrowserRouter} from 'react-router-dom';
 
ReactDOM.render(
<BrowserRouter>
  <ThemeProvider> 
    <App />
  </ThemeProvider>
</BrowserRouter>, 
document.getElementById('root'));
