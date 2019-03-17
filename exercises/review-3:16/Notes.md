server side: 
const express = require('express')
const app = express()
const mongoose = require('mongoose')
<!--middleware that handles changes with your MongoDB from your server -->

employee routes
const express = require('express')
const employeeRoute = express.Route()
const Employee = require('./employeeSchema')


module.exports = employeeRoute



employeeSchema.js:
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  firstName : {
    type: String,
    required: true 
  },
  lastName : {
    type: String,
    required: true
  },
  birthday : String, 
  hireDate: {
    type: String,
    required: true
  },
  ssn: Number,
  address: String, 
  isCool: {
    type: Boolean,
    default: false
  },
  ethnicity: {
    type: String,
    enum: ['Caucasian', 'Hispanic']ere
  }
})

