const express = require("express")
const data = require('./inventory')
const app = express()
const port = 6666

app.use(express.json())

app.get('/item', (req, response) => {
    let {type, name, price, maxPrice, minPrice } = req.query;
    if(type && maxPrice && minPrice){
        const filteredItems = data.filter(item => item.type === type && item.maxPrice <= +1000000 || minPrice <= +0) 
        response.send(filteredItems)
    }
    else if(type && price){
        const typePrice = data.filter(item => item.type === type && item.price <= +price )
        response.send(typePrice)
    }
    else if (type){
        const item= data.filter(item => item.type === type)
        response.send(item)
    }else if(name){
        const name1 = data.filter(item => item.name === name)
        response.send(name1)
    }else if(price){
        const cost = data.filter(item => item.price === +price)
        response.send(cost)
    }else{
        response.send(data)
    }
})

app.listen(port, () => {
    console.log(`i am running ${port}`)
})