import React from "react";

const Box =(props) => {
   const styles={
       backgroundColor: props.backgroundColor,
       color: props.color,
    //    height: "200px",
    //    width: "200px"

   }
    return (
        <div style={styles}>
            <h1 >{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default Box;
