import React, {useState} from 'react';
import axios from 'axios';
export const DogContext = React.createContext()

const DogProvider = (props) => {
  const initialState = {
    dogs: [],
    breeds: [],
  }
  const [dogState, setDogState] = useState(initialState)
//  dog pictures
  const getDogs = () => {
    console.log("hi")
    axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
      const {message} = res.data
      setDogState({
        ...dogState,
        dogs:{message}})
    })  
  }
  // breed of dogs
  const getBreed = () => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
      const {message} = res.data
      setDogState({
        ...dogState,
        breeds:{message}})
    })
  }
  return(
    <DogContext.Provider
      value={{...dogState, getDogs, getBreed}}>
      {props.children}
    </DogContext.Provider>
  )

}
export default DogProvider;