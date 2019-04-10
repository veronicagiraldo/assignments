import React from 'react';
import veronica from './images/veronica.svg'

const Home =() => {
  return(
    <div className="homeTitle">
     {/* <p> Veronica Giraldo </p> */}
     <img src={veronica} alt="veronica"/>
    </div>
    
  )
}

export default Home;