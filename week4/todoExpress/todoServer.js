const express = require('express');
const todosServer = express.Router();
const {v4: uuidv4}= require('uuid')

const todos = [
    {
    "name":"Mike",
    "description":" go to gym",
    "imgUrl":"",
    "completed":"false",
    "_id": "uuidv4"
},
{
    "name":"John",
    "description":" do laundry",
    "imgUrl":"",
    "completed":"true",
    "_id": "uuidv4"
},
{
    "name":"Sam",
    "description":" do homework",
    "imgUrl":"",
    "completed":"true",
    "_id": "uuidv4"
},
]
todosServer.route('/') 
.get( (req,res) =>{
    res.send(todos)
})
.post((req, res) =>{
    const newTodo = req.body;
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send('Successfully added new todo')
})
bountyRouter.route('/:todoId')
.get((req, res ) =>{
    const todoId = req.params.todoId
    const foundtodo = todos.find(todo => todo._id === todoId)
    res.send(foundtodo)
})
.delete( (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    bounties.splice(todoIndex, 1)

    res.send('Resource successfully deleted')
})



.put( (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)

    res.send(`Bounties successfully updated to ${updatedTodo}`)
})


module.exports = todosServer