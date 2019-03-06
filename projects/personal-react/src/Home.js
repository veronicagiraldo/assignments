import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {

    
        //  enter to the Trivia Question page 

    render(){
        return(
            <div>
                <h1>Trivia-2-Go</h1>
                <h3>Would you like to play?</h3>
               <Link to ='/triviaQuestion'>YES</Link>
            
            </div>
       )
    }
     
}       

export default Home