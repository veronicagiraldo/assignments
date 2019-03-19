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


// const employeeSchema = new Schema({
//   firstName: {
//       type: String,
//       required: true
//   },
//   lastName: {
//       type: String,
//       required: true
//   },
//   birthday: String,
//   hireDate: {
//       type: String,
//       required: true
//   },
//   ssn: Number,
//   address: String,
//   isCool: {
//       type: Boolean,
//       default: false
//   },
//   ethnicity: {
//       type: String,
//       enum: ['Caucasian', 'Hispanic', 'Dragon', 'Asian', 'Mulatto']
//   }
// })