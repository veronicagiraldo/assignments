import React, {useState} from 'react';
import axios from 'axios';

export const DogContext = React.createContext()

const DogProvider = (props) => {
  const initialState = []
  const [characters, setCharacters] = useState(initialState)

//  get characters
  const getCharacters = () => {
    console.log("hi")
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err))
   }
// 
  
  
  return(
    <DogContext.Provider
      value={{ characters, getCharacters}}>
      {props.children}
    </DogContext.Provider>
  )

}
export default DogProvider;