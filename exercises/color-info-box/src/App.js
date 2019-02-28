import React from 'react';
import Box from './Box.js';

// import './index.css';

const App = () => {
const styles={
  display: "grid",
  gridGap: "50px",
  gridTemplateColumns: "300px 300px 300px"
  
  
  

}
    return (
      <div style={styles}>
        <Box  title= "Superbad" subtitle= "comedy" info= "seth rogan is funny" backgroundColor= "red"
           />
        <Box  title= "Birdesmaid" subtitle= "subtitle" info ="info" backgroundColor="#63C2EF"
        />
        <Box  title= "title" subtitle = "subtitle" info="info" backgroundColor="#84317B"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#F1C82D"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#F12D81"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#B1F18D"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#F1C28D"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#F1EC8D"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#8DF1EA"/>
        <Box title= "title" subtitle = "subtitle" info="info" backgroundColor="#AF8DF1"/>
      </div>
    );
}


export default App;
