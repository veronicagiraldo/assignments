const express = require('express')
const bountyRoute = express.Router()
const Bounty = require('../models/bountyModel')
// with mongoose/mongoDB

bountyRoute.route('/')
    .get((req, res) => {
      console.log("working?")
      Bounty.find((err, bounties) => {
        if(err) return res.status(500).send(err)
          return res.status(200).send(bounties)
      })
    })
    // Bounty is in the Schema
    // declares a new object that takes
    .post((req, res) => {
      // console.log(1111, "working?")
      // console.log(000, req.body)
      const newBounty = new Bounty(req.body);
      // console.log(111, newBounty)
      newBounty.save((err)=> {
        if (err) return res.status(501).send(err)
        return res.status(200).send(newBounty)
      })
    })

bountyRoute.route('/:_id')

    .get((req, res) => { 
      // console.log("working by ID?") 
      Bounty.findById(
        // console.log(req.params._id),
        {_id: req.params.id},
        (err, bounty) => {
          err && res.status(500).send(err)
          return res.status(200).send(bounty)
        }
      )
    })

    .put((req, res) => {
      Bounty.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        (err, bounty) => {  
          err && res.status(500).send(err)
          return res.status(bounty);
        }
      )
    })
    // .findByIdAndRemove()   .findOneAndRemove()
    .delete((req, res) => {
      Bounty.findOneAndDelete(
        {_id: req.params.id},
        (err, bounty) => {
          if(err) return res.status(501).send(err)
          return res.status(200).send(`you killed ${bounty.firstName}`)
        }
      )
    })

module.exports = bountyRoute