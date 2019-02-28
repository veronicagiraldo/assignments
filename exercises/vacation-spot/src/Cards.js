import React from 'react';


const Cards = (props) => {
    const styles= {
        fontSize: "30px",
        textAlign: "center",
        borderStyle: "groove",
        borderRadius: "20px",
        backgroundColor: props.backgroundColor,
        

    }
    return (
        <div style={styles}>
            <h3>{props.place}</h3>
            <h3>{props.price}</h3>
            <h3>{props.timeToGo}</h3>
        </div>
    )
}
export default Cards;