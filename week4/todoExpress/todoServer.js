const express = require('express');
const todosServer = express.Router();
const {v4: uuidv4}= require('uuid')

const todos = [
    {
    name:"Mike",
    description:" go to gym",
    completed:false,
    _id: uuidv4
},
{
    name:"John",
    description:" do laundry",
    completed:true,
    _id: uuidv4
},
{
    name:"Sam",
    description:" do homework",
    completed:true,
    _id: uuidv4
},
]
todosServer.route('/').get( (req,res) =>{
    res.send(todos)
})
todosServer.route('/').post((req, res) =>{
    const newTodo = req.body;
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send('Successfully added new todo')
})
todosServer.route('/:todoId').get((req, res ) =>{
    const todoId = req.params.todoId
    const foundtodo = todos.find(todo => todo._id === todoId)
    res.send(foundtodo)
})
todosServer.route('/:todoId').delete( (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    res.send('Resource successfully deleted')
    todos.splice(todoIndex, 1)

    
})


todosServer.route('/:todoId').put((req, res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})
 


module.exports = todosServer

