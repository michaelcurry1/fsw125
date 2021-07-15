const express = require('express');
const bountyRouter = express.Router();
// const PORT = 3000;
const {v4: uuidv4}= require('uuid')
const bounties=[ 

    {firstName:'bob',
    lastName:'johnson',
    living:true,
    amount:20,
    type:'sith',
    _id: uuidv4()
},

    {firstName:'john',
    lastName:'smith',
    living:true,
    amount:25,
    type:'jedi',
    _id: uuidv4()
    }
   
]

bountyRouter.route('/') 
.get( (req,res) =>{
    res.send(bounties)
})
.post((req, res) =>{
    const newBounty = req.body;
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty,'Successfully added new bounty')
})
bountyRouter.route('/:bountyId')
.get((req, res ) =>{
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
.delete( (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)

    res.send('Resource successfully deleted')
})



.put( (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)

    res.send(`Bounties successfully updated to ${updatedBounty}`)
})

module.exports = bountyRouter