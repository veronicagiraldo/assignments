import React from 'react'
import {withTheme} from '../ThemeProvider'
import '../styles/reviewContent.css';

const ReviewContent = ({reviews}) => {
  return (
    <div>
      <h1>Shakespeare Reviews</h1>
      <div className="reviewContainer">
      {reviews.map((review) => (
        <div className="card">
          <img src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar5_big@2x.png" alt="avatar" />
          <div className="card-body">
            <h4 className="card-title">{review.author}</h4>
              <h5 className="card-rating">Rating:{review.rating}</h5>
              <h6 className="card-date">{review.publish_date}</h6>
              <p className="card-text">"{review.body}"</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
};

export default withTheme(ReviewContent)
