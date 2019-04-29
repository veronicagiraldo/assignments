import React, {useContext, useEffect} from 'react';
import { DogContext} from '../Context/DogProvider.js';

const Home = () => {

    const {dogs, breeds, getDogs} = useContext(DogContext)
    useEffect(() => { getDogs()},[])
    return(<div></div>)
  }
  
export default Home; 