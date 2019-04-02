const express = require('express');
const expressJwt = require('express-jwt');
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 4500;


app.use(express.json());
app.use(morgan('dev'));
app.use("/api", expressJwt({secret: process.env.SECRET}));

app.use('/api/list', require("./Routes/webRoutes"))
app.use('/auth', require("./Routes/authRoutes"));
// make listing route and form information?
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/list', {useNewUrlParser: true})
    .then(() => console.log("connected to Mongoosedb"))
    .catch(err => console.log(err))

app.use((err, req, res, next) => {
  console.error(err);
  if(err.name === "UnauthorizedError"){
    res.status(err.status);
  }
  return res.send({ message: err.message});
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});