import React from 'react'
import Moment from 'react-moment';
import StarRatingComponent from 'react-star-rating-component';
import {Spring} from 'react-spring/renderprops';
import {withTheme} from '../ThemeProvider'
import '../styles/reviewContent.css';
import avatar2 from '../images/avatar2.png'

export class ReviewContent extends React.Component{
  constructor(){
    super()
    this.state={
      rating: 1,
      rating_empty_inital: 0, 
    }
  }
  render(){
    const{reviews}=this.props;
  return (
    <div>
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0}}
      config={{delay: 1000, duration: 1000}}
      >
      {props =>(
        <div style={props}>
          <div className="reviewContainer">
            {reviews.map((review, i) => (
            <div key={i} review={review} className="card">
              <img className="reviewImg"src={avatar2} alt="avatar" />
                <div className="card-body">
                    <StarRatingComponent
                    name='rating'
                    editing={false}
                    starColor={"gold"}
                    emptyStarColor={"GAINSBORO"}
                    starCount={5}
                    value={`${review.rating}`}
                    />
                    <h4 className="card-title"> {review.author}</h4>
                    <Moment className="card-date"format="MM/DD/YYYY">{review.publish_date}</Moment>
                    <p className="card-text">"{review.body}"</p>
                  </div>
                </div>
             ))}
            </div>
          </div>
        )}
      </Spring>
    </div>
    )
  }

};
export default withTheme(ReviewContent)
