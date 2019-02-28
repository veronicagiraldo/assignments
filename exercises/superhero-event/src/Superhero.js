import React from 'react';

const Superhero = (props) => {
    const styleObj ={
        backgroundImage: `url(${props.images})`
    }

    return (
       <div onClick={() => {
            return props.sayCatchPhrase(props.catchPhrase);}} style={styleObj} className="superHero-div">
            <h1>{props.name}</h1>
        </div>

    )
}

export default Superhero;