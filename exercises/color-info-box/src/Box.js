import React from "react";

const Box =(props) => {
   const styles={
       backgroundColor: "pink",
       color: "yellow", 
       height: "100px",
       width: "100px"

   }
    return (
        <div className="box">
            <p style={styles}> Title </p>
            <p style={props.backgroundColor}>Subtitle</p>
            <p>Information</p>
        </div>
    )
}

export default Box;
