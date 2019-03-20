import React from 'react';
import {withGlobal} from './GlobalProvider';

const BountyItem = (props) => {
  // console.log(props.bounty)
  let {_id} = props.bounty
  // console.log(props.bounties)
    return(
      <div className="BountyItem" style={{border: "5px solid black"}}>
        <h2>{props.bounty.firstName}</h2>
        <h2>{props.bounty.lastName}</h2>
        <h3>{props.bounty.bountyAmount}</h3>
        <h3>{props.bounty.isJedi}</h3>
        <img src={props.bounty.image} alt=""/>
        <button onClick={() => props.deleteBounty(_id)}>DELETE</button>
        <button onClick={() => props.editBounty()}>EDIT</button>
      </div>
    )
}

export default withGlobal(BountyItem)