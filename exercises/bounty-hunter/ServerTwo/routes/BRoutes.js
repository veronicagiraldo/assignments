const express = require('express')
const bountyRoute = express.Router()
const Bounty = require('../models/bountyModel')
// with mongoose/mongoDB

bountyRoute.route('/')
    .get((req, res ) => {
      Bounty.find((err, bounties) => {
        if(err) return res.status(500).send(err)
          return res.status(200).send(bounties)
      })
    })
    // Bounty is in the Schema
    // declares a new object that takes
    .post((req, res) => {
      // console.log(req.body)
      const newBounty = new Bounty(req.body);
      // console.log(new Bounty)
      newBounty.save((err)=> {
        if (err) return res.status(501).send(err)
        return res.status(200).send(newBounty)
      })
    })

bountyRoute.route('/:id')

    .get((req, res) => {  
      Bounty.findById(
        {_id: req.params.id},
        (err, bounty) => {
          err && res.status(500).send(err)
          return res.status(200).send(bounty)
        }
      )
    })

    .put((req, res) => {
      Bounty.findByIdAndUpdate(
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
          if(err) return res.status(500).send(err)
          return res.status(200).send(`you killed ${employee.firstName}`)
        }
      )
    })

module.exports = bountyRoute