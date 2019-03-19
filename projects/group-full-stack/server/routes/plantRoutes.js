const express = require('express')
//Access to express library

const plantRoute = express.Route()
//Access to express routes
//Note how it tags onto the first endpoint mentioned in the server || app.use('/plants')

const Plant = require('../model/plantSchema')
//this refers to an instance of the 'plant schema'
//Note the schema is only a blueprint to create new plants
//Note ../ sends you back a directory (folder)

plantSchema.routes('/')
  .get((req, res, next) => {
      Plant.find((err, plants) =>{
        if (err) return res.status(500).res.send(err)
        return res.status(200).send(plants)
      })
  })





module.export = plantRoute