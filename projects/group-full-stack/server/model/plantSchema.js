const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema({
    plantName: { 
      type: String, 
      required: true
    },
    living: {
      type: Boolean,
      required: true
    },
    harvestDate: {
      type: String,
      required: true
    },
    // m.updated = new Date;
    updated:{  
      type: Date, 
      default: Date.now 
    },
    plantLife:{
      type: String,
      required: true
    }

})



module.exports = mongoose.model('Plant', plantSchema)
