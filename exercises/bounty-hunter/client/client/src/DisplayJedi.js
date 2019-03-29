import React, {Component} from 'react';
import {withGlobal} from './GlobalProvider';
import BountyItem from './BountyItem'; 

// handleChange and handleSubmit
class DisplayJedi extends Component {
    componentDidMount(){
        // console.log(this.props)
        this.props.getBounty()
      }

  render(){
        const mappedBounties = this.props.bounties.map((bounty, i) => {
          // console.log(1111,mappedBounties)
          return(
            <BountyItem key ={i} bounty={bounty} 
            />
          )
        })     
     return (
         <div className="displayJedi">
         {/* <img src={this.props.image} alt=""/>
         <h3>{this.props.firstName}</h3>
         <h3>{this.props.lastName}</h3> */}
         {/* </div> */}

       
          {mappedBounties}
        </div>
      )
  }
}
export default withGlobal(DisplayJedi)
