mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(() => console.log("connected to Mongoosedb"))
    .catch(err => console.log(err))

// connecting 


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const uuid = require('uuid')
const port = 4678

app.use(express.json())

// http request from client
app.use('/bounty', require('./ServerTwo/routes/bountyRoutes'))
// put in BRoutes for mongo info 
// router is have them all in a different router- 
// multi- routers
mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(() => console.log("connected to Mongoosedb"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`i am loading ....${port}`)
})

Todo.findByIdAndUpdate

.put((req, res) => {
  let {_id} = req.params;
  Todo.findOneAndUpdate({_id: req.params._id}, req.body, (err, todo) =>{})

})
.delete((req, res) => {
  Todo.findOneAndUpdate(
    {_id: req.params.Todo_id}
  )
})

// proxy : add localhost:3333 
// connecting server to the client 

TodoProvider