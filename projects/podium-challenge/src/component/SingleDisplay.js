import React from 'react'
import Moment from 'react-moment';
import StarRatingComponent from 'react-star-rating-component';
import {Spring} from 'react-spring/renderprops';
import{ withTheme} from '../ThemeProvider'
import '../styles/single.css';
import meow from '../images/shakespeare-cat-julie-lamb-1.jpg'

export class SingleDisplay extends React.Component{
  constructor(){
    super()
    this.state={
      rating: 1,
      rating_empty_inital: 0,
    }
  }

  render(){
    return (
      <div>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0}}
        config={{delay: 1000, duration: 1000}}
      >
      {props => (
      <div style={props}>
        <div className="singleContainer">
          <div className="display">
            <img className="catImage"src={meow} alt="single"/> 
              <div className="singleBody">
                <StarRatingComponent
                    name='rating'
                    editing={false}
                    starColor={"gold"}
                    emptyStarColor={"GAINSBORO"}
                    starCount={5}
                    value={`${this.props.single.rating}`}
                    />
                  <h5 className="card-title">{this.props.single.author}</h5>
                  <Moment className="card-date" format="MM/DD/YYYY">{this.props.single.publish_date}</Moment>
                  <p className="card-text">"{this.props.single.body}"</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
      </div>
    )
  }
}
    
export default withTheme(SingleDisplay)
