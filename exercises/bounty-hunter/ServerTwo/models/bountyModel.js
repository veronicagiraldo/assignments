const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: String,
    lastName : String,
    isJedi : String,
    living : {
      type: Boolean,
      default: true
    },
    bountyAmount : Number,
    image: {
      type: String, 
      default: 'http://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg'
    }
})

module.exports = mongoose.model('Bounty', bountySchema)
// model method of mongoose takes two arguments
// first argument is a string by which the an instance of a schema will 
// second argument is the schema template. 