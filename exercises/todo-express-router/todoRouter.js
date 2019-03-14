const express = require('express')
const todoRouter = express.Router()
const data = require('./database')
const uuid = require('uuid')

todoRouter.route('/')
// Get
        .get((request, response) => {
            // console.log("get todo")
            response.send(data)
        })
// POST
        .post((request, response) => {
            // console.log("I am a new post")
            const newTodo = request.body;
            newTodo._id = uuid.v4();
            data.push(newTodo)
            response.send(newTodo)
        })

todoRouter.route('/:_id')
// Get_id
        .get((request, response) =>{
            // console.log("todo by id")
            const {_id} = request.params;
            const found = data.find(todo => todo._id === _id)
            if(found){
                response.send(found)
            }else{
                response.send("ID N/A")
            }
        })
// PUT_ID 
        .put((request, response) => {
            // console.log('put with Id')
            const update = request.body;
            const {_id} = request.params
                data.forEach(todo => {
                    if(todo._id === _id){
                    todo = Object.assign(todo, update)
                    }
                }) 
                const found = data.find(todo => todo._id === _id)
                if(found){
                response.send(found)
                }else{
                    response.send("could not be found")
                }
                })

// Delete ID
        .delete((request, response) => {
            const {_id} = request.params;
            const index = data.findIndex(todo => todo._id === _id)  
                        data.splice(index, 1)    
            if(index !== -1){
                response.send("item deleted")
            }else{
                response.send('ID not found')
            }
        })

module.exports = todoRouter;