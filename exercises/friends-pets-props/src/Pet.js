import React from 'react';

const Pet =(props) => {
    return (
     <div>
         <h3>{props.petName} the {props.petBreed} </h3>
     </div>   
    )
}

export default Pet;