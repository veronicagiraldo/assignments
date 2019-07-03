import React from 'react'
import{ withTheme} from '../ThemeProvider'
import ReviewContent from '../content/ReviewContent';
import '../styles/displayReview.css'
// useEffect 

export class DisplayReviews extends React.Component{
  componentDidMount(){
    this.props.getData();
  }
  render(){
    this.props.reviews.map(() => <ReviewContent />)
    return (
      <div className="displayContainer">
        <div className="display">
        </div>
      </div>
    )
  }
}
export default withTheme(DisplayReviews)
