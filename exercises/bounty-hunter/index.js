const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const uuid = require('uuid')
const port = 4678

app.use(express.json())

// http request from client - Routes
app.use('/bounty', require('./ServerTwo/routes/BRoutes'))
// put in BRoutes for mongo info 
mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(() => console.log("connected to Mongoosedb"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`i am loading ....${port}`)
})