//Note app is what the express() method is returning
//This gives us access to the express library
const express = require('express')
const app = express()

const mongoose = express('mongoose')
//middleware that helps handle changes with your MongoDB from your server
app.use(express.json())
//Middleware that converts all incoming and outgoing objects into and from JSON
//Note there are other formats for sending and recieving information through the web. 
// We will be using JSON 
mongoose.connect('mongodb://localhost:27017/group-full-stack', {useNewUrlParser: true}, () => {
    console.log('Connected to database')
})
    .catch(err => console.error(err)) 
//mongoose's connect method takes up to three arguments. 
// 1. address of the database,
// 2. is settings? (where the folder is saved?)/group-full-stack
// 3. callback that we used to indicate the connection between server and mongodb

// Routes for the 
app.use('/plant', require('//Users/veronicagiraldo/dev/assignments/projects/group-full-stack/server/routes/plantRoutes.js'))


let indicatedPort;
const port = indicatedPort || 4204

// Listen
app.listen(port, () =>{
  console.log(`hello i running on ${port}`)
})
//This is a placeholder for imported port location
//indicated port would come from your .env file or as prescribed by your host
//the || 'double pipe' means 'or', which allows you to write a default port