const express = require("express");
const app = express()
const uuid = require('uuid')
const port = 44444;
const data = require('./database')

app.use(express.json())

// GET
app.get('/tent', (request, response) => {
    response.send(data)
})

// POST 
app.post('/tent', (request, response) => {
    const newReq = request.body; 
    newReq._id = uuid.v4();
    data.push(newReq)
    response.send(newReq)
})
// GET :_ID //
app.get('/tent/:_id', (request, response) => {
    console.log("get a new id")
    const {_id} = request.params;
    const found = data.find(tent => tent._id === _id)
    if(found){
        response.send(found)
    }else{
        response.send("not found")
    }
})
// PUT :_ID //
app.put('/tent/:_id', (request, response) =>{
    console.log("put a new item")
    const update = request.body;
    const {_id} = request.params;
    data.forEach(tent => {
        if(tent._id === _id){
            tent = Object.assign(tent, update)
            response.send(data)
        }else{
            response.send("did not put")
        }
    })
   
})
//DELETE f
app.delete('/tent/:_id', (request, response) => {
    const {_id} = request.params;
    const index = data.findIndex(tent => tent._id === _id)
                data.splice(index, 1)
        if(index !== -1){
            response.send("item deleted")
        }else{
            response.send("item not found")
        }
})

app.listen(port, () => {
    console.log(`I am working port : ${port}`)
})