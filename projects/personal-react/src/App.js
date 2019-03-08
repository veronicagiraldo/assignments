import React from 'react';
import Home from './Home';
import TriviaQ from './TriviaQ';
import Navbar from './Navbar';
import './app.css'
import {Switch, Route} from 'react-router-dom';
import About from './About';


class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path = '/' component ={Home} />
                    <Route path ='/about' component = {About}/>
                    <Route path = '/triviaQuestion' component= {TriviaQ}/>
                </Switch>
            </div>
    
        )
    }
}
export default App 