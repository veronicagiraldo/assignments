import React from 'react';
import './styles/App.css';
import {withTheme} from './ThemeProvider';

import Home from './component/Home'
import DisplayReviews from './component/DisplayReviews'
import ReviewContent from './content/ReviewContent'
import SingleDisplay from './component/SingleDisplay'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Home />
          { this.props.isViewingSingleReview ?  
          <>
          <SingleDisplay />
          </>
          :
          <>
          <DisplayReviews />
          <ReviewContent />
          </>
         }
      </div>
    );
  }
}
export default withTheme(App);

