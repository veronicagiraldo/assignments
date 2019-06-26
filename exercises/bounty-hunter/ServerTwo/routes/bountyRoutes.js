// // // without mongoose 
// const express = require('express')
// // const bountyRoutes = express.Router()
// // const uuid = require('uuid')
// // const data = require('../../bountyData')

// bountyRoutes.route('/')
// // get
//          .get((request, response) => {
//             response.send(data)
//         })
// // post 
//         .post((request, response) => {
//             const newObj = request.body;
//             newObj._id = uuid.v4();
//             data.push(newObj)
//             response.send(newObj)
//         })
// bountyRoutes.route('/:_id')
// // get_id
//         .get((request, response) => {
//             const {_id} = request.params;
//             const found = data.find(item => item._id === _id)
//             if(found){
//                 response.send(found)
//             }else{
//                 response.send("not found")
//             }
//         })
// // PUT
//         .put((request, response) => {
//             const update = request.body;
//             const {_id} = request.params;
//                         data.forEach(item => {
//                             if(item._id === _id){
//                                 item = Object.assign(item, update)
//                             }
//                         })
//                         const found = data.find(item => item._id === _id)
//                         if(found){
//                             response.send(found)
//                         }else{
//                             response.send("cound not be found")
//                         }
//                 })

// // delete
//         .delete((request, response) => {
//             const {_id} = request.params;
//             const index = data.findIndex(item => item._id === _id)
//                         data.splice(index, 1)
//                 if(index != -1){
//                     response.send("item deleted")
//                 }else{
//                     response.send("id not found")
//                 }
//         })

// module.exports = bountyRoutes

