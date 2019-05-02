import React, { useEffect, useContext} from 'react';
import { DogContext} from '../Context/DogProvider.js';
// import axios from 'axios';

const Home =()=>{

  const {characters, getCharacters} = useContext(DogContext)
  useEffect(() => {getCharacters()},[])


      return(
        <div>

        {characters.map(c => 
                <div style={{backgroundImage: `url(${c.image})`}}>
                <h1>{c.name}</h1>
        </div>
      )}
      </div>
      )

}
export default Home;

 

  
    

  

  // const { dogs, getDogs} = useContext(DogContext)

  // useEffect(() => { getDogs() }, [])

  // return(
  //   <div>
  //     <p>here is your {dogs}</p>
  //     { dogs.map(dog => 
  //       <div style={{backgroundImage: `url(${dog.image})`}}> 
  //         <h1>{dog.name}</h1>
  //         <img src={dog.message}/>
  //       </div>
  //       )}
  //   </div>
  // )

  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/list/all')
  //       .then(res => {
  //         getDogs(res.data)
  //       })
  //       .catch(err =>console.log(err))
      
  // }, [])
  // console.log(dogs)
    
  //   // const {dogs, breeds, getDogs} = useContext(DogContext)
  //   // useEffect(() => { getDogs()},[])
  //   return(
  //   <div>
  //   <div>
  //           { dogs.map(d => 
  //                   <div style={{ backgroundImage: `url(${d.message})`}}>
  //                         <h1>{d.name}</h1>
  //                     </div>
  //                      )}  
  //     </div>
  //   </div>
  //   )
  
  
// export default Home; 