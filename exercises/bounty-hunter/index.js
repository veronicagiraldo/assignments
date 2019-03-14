const express = require('express')
const uuid = require('uuid')
const app = express()
const data = require('./bountyData')
const port = 4678

app.use(express.json())
// get
app.get('/bounty', (request, response) =>{
    response.send(data)
})
// post 
app.post('/bounty',(request, response) => {
    const newObj = request.body;
    newObj._id = uuid.v4();
    data.push(newObj)
    response.send(newObj)
})
// get_id
app.get('/bounty/:_id', (request, response) =>{
    const 
})


app.listen(port, () => {
    console.log(`i am loading ....${port}`)
})