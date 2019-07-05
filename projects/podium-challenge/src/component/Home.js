import React from 'react'
import {withTheme} from '../ThemeProvider';
import '../styles/title.css'

    const Home = (props) => {
      // const shuffleReviews = this.state.shuffleReviews
    return (
      <div className="homeContainer">
      <div className="homeInfo">
        <h2>Reviews of Shakespeare's Plays</h2>
        
        <button onClick={props.shuffleReviews}> Random/View All</button> 
      </div>    
      </div> 
    )
  }
export default withTheme(Home);
