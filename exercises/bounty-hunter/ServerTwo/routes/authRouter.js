const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

authRouter.post("/signup", (req, res, next) => {
  User.findOne({username: req.body.username}, (err, existingUser)=> {
    if(err) {
      res.status(500)
      return next(err);
    }
    if(existingUser !== null) {
      return res.status(400)
      .send(new Error("that username already exists!!"))
    }
    
    const newUser = new User(req.body)
    newUser.save((err, user) => {
      if(err) {
        res.status(500)
        return next(err);
      }
      // 1st argument = our user object converted to js using .toObject()
      // 2nd argument = our secret, to authentication 
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res.status(200).send({
        success: true,
        user: user.toObject(),
        token
      })
    });
  });
})
// login- using post
authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err) {
      return next(err);
    };
    if(!user || user.password !== req.body.password){
      res.status(403)
      return next(new Error('email or password is incorrect'))
    }
    // if(!user || user.password !== req.body.password){
    //   res.status(403)
    //   return next(new Error('email or password is incorrect'))
    // }
    const token = jwt.sign(user.toObject(), process.env.SECRET);
    return res.send({
      token,
      user: user.toObject(),
      success: true
    })
  })
})
module.exports = authRouter