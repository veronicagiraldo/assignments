import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Things from './Things'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
 <Things>
<App />
</Things>
</BrowserRouter>
, document.getElementById('root'))

