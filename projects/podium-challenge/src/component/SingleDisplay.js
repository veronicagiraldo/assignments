import React from 'react'
import{ withTheme} from '../ThemeProvider'
import SingleContent from '../content/SingleContent';
import '../styles/displayReview.css'

// useEffect 


export class SingleDisplay extends React.Component{
  // componentDidMount(){
  //   this.props.singleData();
  // }
  render(){
    // const mappedReviews = this.props.reviews.map((review, i)=>{
    //   return<h3 key={i}>{review.author}</h3>
    // })
    this.props.single.map(() => <SingleContent />)
    console.log(this.props.single, 222)
    return (
      <div className="displayContainer">
        <div className="display">
        </div>
      </div>
    )
  }
}
export default withTheme(SingleDisplay)
