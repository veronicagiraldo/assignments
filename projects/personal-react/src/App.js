import React from 'react';
import Home from './Home';
import TriviaQ from './TriviaQ'
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {


    render(){
        return(
            <div>
                <Switch>
                    <Route exact path = '/' component ={Home} />
                    <Route path = '/triviaQuestion' component={TriviaQ}/>
                </Switch>
            </div>
    
        )
    }
    

}
export default App 