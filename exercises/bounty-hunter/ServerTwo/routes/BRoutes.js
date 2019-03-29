const express = require('express')
const bountyRoute = express.Router()
const Bounty = require('../models/bountyModel')
// with mongoose/mongoDB

bountyRoute.route('/')
    .get((req, res, next) => {
      // console.log("working?")
      Bounty.find({user: req.user._id},(err, bounty) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.send(bounty)
      })
    })

    // Bounty is in the Schema
    // declares a new object that takes
    .post((req, res, next) => {
      const bounty = new Bounty(req.body);
      //todo.user = req.user._id;
      bounty.user = req.user._id
      // console.log(111, newBounty)
      bounty.save((err, newBounty)=> {
        if (err){
          res.status(501)
          return next(err)
        };
        return res.status(200).send(newBounty)
      })
    })

bountyRoute.route('/:_id')

    .get((req, res, next) => { 
      // console.log("working by ID?") 
      Bounty.findOne({_id: req.params.id, user: req.users._id},
        (err, bounty) => {
          if(err){
            res.status(500)
            return next(err)
          } 
          if(!bounty){
            res.status(404)
            return next(new Error("no bounty item found"))
          }
          return res.status(200).send(bounty)
        })
    })

    .put((req, res, next) => {
      let {_id}= req.params;
      Bounty.findOneAndUpdate(
        {_id:req.params._id, user: req.user._id}, 
        req.body, 
        {new: true},
        (err, bounty) => { 
          if (err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(bounty);
        }
      )
    })
    // .findByIdAndRemove()   .findOneAndRemove()
    .delete((req, res, next) => {
      Bounty.findOneAndDelete(
        {_id: req.params._id, user: req.user._id},
        (err, bounty) => {
          if(err){
            res.status(501)
            return next(err)
          } 
          return res.status(200).send(`you killed ${bounty.firstName}`)
        }
      )
    })

module.exports = bountyRoute