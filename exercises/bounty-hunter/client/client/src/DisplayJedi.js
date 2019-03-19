import React, {Component} from 'react';
import {withGlobal} from './GlobalProvider';


class DisplayJedi extends Component {
    constructor(props){
      super(props)

    }
      componentDidMount(){
        // console.log(this.props)
        this.props.getBounty()
      }

  render(){
        let mappedBounties = this.props.bounties.map(bounty => {
          // console.log(235745,this.props)
     return (
       <div>
         <div className="bountyInfo">
         <div key={this.props._id}>
              <h1>{this.props.firstName}</h1>
              <img src={this.props.images} alt= ""/>
            
            </div>
         </div>
          {mappedBounties}
       </div>
      )
   })
  }
}

export default withGlobal(DisplayJedi)