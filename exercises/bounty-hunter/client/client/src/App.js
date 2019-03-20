import React from 'react';
import {withGlobal} from './GlobalProvider';
import Form from './Form';
import DisplayJedi from './DisplayJedi';


const App = () => {
  // console.log(1111,props)
  // let mappedBounties = props.bounties.map(bounty => {
  //   return (
  //     <div key={bounty._id}>
  //       <h1>{bounty.firstName}</h1>
  //       <img src={bounty.image} alt=""/>
  //     </div>
  //   )
  // })

    return (
      <div>
        <Form />
        <DisplayJedi />
       
      </div>
    );
}
  
export default withGlobal(App);
