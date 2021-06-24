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
    res.send('Successfully added new bounty')
})

module.exports = bountyRouter