import React from 'react';
import {withGlobal} from './GlobalProvider';
import Form from './Form';

const App = (props) => {
  console.log(1111,props)
  let mappedBounties = props.bounties.map(bounty => {
    return (
      <div key={bounty._id}>
        <h1>{bounty.firstName}</h1>
        <img src={bounty.image} alt=""/>
      </div>
    )
  })
    return (
      <div>
        
      <Form />
      {mappedBounties}
      </div>
    );
}

  
export default withGlobal(App);
