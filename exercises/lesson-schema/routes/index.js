const Profile = require('./../models/schema')
const youTubeRoute;

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
    .then(() => console.log('Database is connected'))


youTubeRoute.get('/', (req, res) => {
    Profile.find((err, profiles) => {
        return res.send(profiles)
    })
})
// find will take a callback function, access with a method