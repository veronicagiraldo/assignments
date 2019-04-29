import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import DogProvider from './Context/DogProvider.js';


ReactDOM.render(
<BrowserRouter>
<DogProvider>
<App />
</DogProvider>
</BrowserRouter>, 
document.getElementById('root'));

