import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { withContext } from './AppContext';


ReactDOM.render(
<AppContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</AppContextProvider>
,document.getElementById('root'));


