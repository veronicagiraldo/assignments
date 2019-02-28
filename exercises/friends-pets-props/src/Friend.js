import React from 'react';
import Pet from './Pet';

const Friend =(props) => {
    const styles={
        color: "#4C123B", 
        backgroundColor: "#F18DD3",
        textAlign: "center"

    }

    const mappedPets = props.pets.map((pet, i) => {
        return (
            <Pet key={i+pet.name} petName={pet.name} petBreed={pet.breed}/>
        )
    })      

    return(
        <div style={styles}>
            <h2>{props.name} is {props.age} years old.</h2>
            <h3>{props.name}'s pet: </h3>
            {mappedPets}
        </div>
      
    )
    



}


export default Friend;
