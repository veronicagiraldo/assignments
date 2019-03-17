const mongoose = require('mongoose')
const objectId= mongoose.Schema.Types.ObjectId

const youTubeUser = new mongoose.Schema({
    username:{
        type: String, 
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    savedFavorites: [{
        type: objectId,
        ref: 'Videos'  
    }],
    email: String,
    profileImg: Buffer, 
    address: {
        street: String,
        zip: Number,


    },
    isAdmin: false 
})

module.exports = mongoose.module('Profile', youTubeUser)