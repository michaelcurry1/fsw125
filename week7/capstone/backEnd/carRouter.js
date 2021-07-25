const express = require('express');
const carRouter = express.Router();
// const PORT = 3000;
const {v4: uuidv4}= require('uuid')

const cars=[ 

    {make:'ford',
    model:'mustang',
    isCar:true,
    amount:20,
    type:'car',
    _id: uuidv4()
    },

    {make:'chevy',
    model:'camaro',
    isCar:true,
    amount:20,
    type:'car',
    _id: uuidv4()
    },

    {make:'ford',
    model:'f150',
    isCar:false,
    amount:27,
    type:'truck',
    _id: uuidv4()
    },

    {make:'dodge',
    lastName:'caravan',
    isCar:false,
    amount:31,
    type:'van',
    _id: uuidv4()
    }

   
]

carRouter.route('/') 
.get( (req,res) =>{
    res.send(cars)
})
.post((req, res) =>{
    const newCar = req.body;
    newCar._id = uuidv4()
    cars.push(newCar)
    res.send(newCar)
})

carRouter.route("/car").get((req, res)=>{
    const type= req.query.type
    const types= cars.filter(car=> car.type.toLowerCase()===type.toLowerCase())
    res.send(types)
})

carRouter.route('/:carId')
.get((req, res ) =>{
    const carId = req.params.carId
    const foundCar = cars.find(car => car._id === carId)
    res.send(foundCar)
})
.delete( (req, res) =>{
    const carId = req.params.carId
    const carIndex = cars.findIndex(car => car._id === carId)
    cars.splice(carIndex, 1)

    res.send('Resource successfully deleted')
})



.put( (req, res) =>{
    const carId = req.params.carId
    const carIndex = cars.findIndex(car => car._id === carId)
    const updatedCar = Object.assign(cars[carIndex], req.body)

    res.send(`Cars successfully updated to ${updatedCar}`)
})

module.exports = carRouter