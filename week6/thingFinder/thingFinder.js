const express = require('express');
const thingFinder = express.Router();

const fruit = [
    {
    type:"banana",
    brand:" chicita",
    price:5,
 
},
{
    type:"orange",
    brand:" sunkist",
    price:7,
    
},
{
    type:"grapes",
    brand:" purple hue",
    price:15,
    
},
{
    type:"apples",
    brand:" green acres",
    price:12,
    
},
]
thingFinder.route('/').get( (req,res) =>{
    res.send(fruit)
})
thingFinder.route('/:fruitType').get((req, res ) =>{
    const fruitType = req.params.fruitType
    const foundfruit = fruit.find(fruit => fruit.type === fruitType)
    res.send(foundfruit)

})








module.exports = thingFinder