const express = require('express')
const app = express()
require('dotenv').config()
const expressJwt = require('express-jwt')
const mongoose = require('mongoose')
// const uuid = require('uuid')
// const port = 4678
const PORT = process.env.PORT || 4678

app.use(express.json())
// applies express-jwt middleware on anything using the route /api 
app.use('/api', expressJwt({secret: process.env.SECRET}))
// http request from client - Routes
// get/post/ etc interactions 
// endpoints can be whatever you want. '/api/bounty'
app.use('/api/bounty', require('./ServerTwo/routes/BRoutes'))
app.use('/auth', require('./ServerTwo/routes/authRouter'))

// put in BRoutes for mongo info 
mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(() => console.log("connected to Mongoosedb"))
    .catch(err => console.log(err))

// global error handler- anything in the server that we use next() 
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});
   


app.listen(PORT, () => {
    console.log(`i am loading ....${PORT}`)
})