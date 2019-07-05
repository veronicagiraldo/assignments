import React from 'react'
import{ withTheme} from '../ThemeProvider'
import ReviewContent from '../content/ReviewContent';
import '../styles/displayReview.css'

export class DisplayReviews extends React.Component{
  componentDidMount(){
    this.props.getData();
  }
  render(){
    this.props.reviews.map(() => <ReviewContent />)
    return (
        <div className="displayContainer">
        </div>
      )
  }
}
export default withTheme(DisplayReviews)
