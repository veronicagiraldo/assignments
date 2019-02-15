var axios = require("axios");


// function assignResponseToVariable(response){
//     console.log(response.data);
// }

// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)

axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(response.data);
})
axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  })

// get todo
// log them to console
// log the titles line by line