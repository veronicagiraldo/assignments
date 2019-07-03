import React from 'react'
import {withTheme} from '../ThemeProvider'
import '../styles/reviewContent.css';

const SingleContent = ({single}) => {
  return (
    <div>
      <h1>Shakespeare Reviews</h1>
      <div className="reviewContainer">
      {single.map((one) => (
        <div className="card">
          <img src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar5_big@2x.png" alt="avatar" />
          <div className="card-body">
            <h4 className="card-title">{one.author}</h4>
              <h5 className="card-rating">Rating:{one.rating}</h5>
              <h6 className="card-date">{one.publish_date}</h6>
              <p className="card-text">"{one.body}"</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
};

export default withTheme(SingleContent)
