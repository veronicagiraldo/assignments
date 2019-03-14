const express = require('express')
const app = express()
const port = 5578


app.use(express.json())

app.use('/todo', require('./todoRouter'))

// mongoose.connect('mongodb://localhost:27017/vacationSpots', {useNewUrlParser: true}).then(() =>{
//     console.log("connected to MongoDB")
// })

app.listen(port, () => {
    console.log(`i am running ${port}`)
})