const express = require("express")
const bodyParser = require('body-parser')
const app = express('')
const uuid = require('uuid')  //install npm i uuid
const port = 5000 

const data = require('./database')
// send a request parse to JSON
// app.use(express.json())

//GET
app.get('/spot', (request, response) =>{
    response.send(data)
})

//POST
app.post('/spot', (request, response) => {
    const newObj = req.body;
    newObj._id = uuid.v4(); //generates a random ID
    data.push(newObj)
    response.send(newObj) //creates the id number when added to the database
})

// console.log(request.params) //get in postman
// const {_id} we are trying to save 
// : params , data = database, .find() (is a for loop, goes through each item in the array)
app.get('/spot/:_id', (request, response) =>{ //naming the property : _id
    const {_id} = request.params;
    response.send(data.find(spot => spot._id === _id))
})

//PUT

// req.params; is the object 
// forEach() to object in the database and keep the same array 
// 
app.put('/spot/:_id', (request, response) => {
    const updatedObj = request.body;
    const {_id} = request.params;
    data.forEach(spot => {
        if(spot._id === _id)
        spot = Object.assign(spot, updatedObj)
        }
    })
    response.data






// DELETE

app.delete('/spot/:_id', (request, response) => {
    const {_id} = request.params;
    const index = data.findIndex(spot => spot._id === _id)
    data.splice(index, 1)
    response.send('item success removed')
})


// converting all the information from json to javascript 
app.use(bodyParser.json())
const database = [
    {
        name: 'spaghetti',
        type: 'pasta',
        sauce: 'red',
        id: 945068
    },{
        name: 'alfredo',
        type: 'pasta',
        sauce: 'alfredo',
        id: 834598
    },{
        name: 'lasagna',
        type: 'pasta',
        sauce: 'marinara',
        id: 847539
    }
]

app.get('/food', (request, response) => {
    response.send({database})
})

app.post('/food', (request, response) => {
    console.log(request.body)
    database.push(request.body)
    response.send(database)
})

// app.put('/food/', (request, response) => {
//     console.log(request.body)
//     database.push(request.body)
//     response.send(database)

// })

// app.delete('/food', (request, response) => {

// })

// app is getting everything from express
// get the URL ='/' , then the request and response is the callback function
// callback function 
// express lets you get access to get/put/post/delete 

// app.get('/', (request, response) => {
//     response.send({sport: 'football'})
// })

// .listen() establishing where the server is going to live. (any number ex. 6550?; min-max 00000, 99999)
// you can just use app.listen( to run the server  with out the app.get)
app.listen(port, () => {
    console.log(`server is running ${port}`)
})

