import React from 'react'
import {withTheme} from '../ThemeProvider';
import {Link} from 'react-router-dom';

const Home = () => {
  // handleClick=()=>{
  //   e.preventDefault()
  // }
  return (
    <div className="homeContainer">
    <div className="homeInfo">
      <h2>Shakespeare's Reviews</h2>
      <h4>View the reviews</h4>
      <Link to="/ReviewContent">View All</Link>
      <Link to="/SingleContent">View One</Link>
      <button onClick={() => {}}>View all</button>
      <button onClick={() => {}}>View one</button>
      {/* add handleClick */}
    </div>    
    </div>
  )
}

export default withTheme(Home);
