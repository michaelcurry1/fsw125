const express = require('express')
const app = express();

app.use(express.json())

app.use("/bounties",require('./bountyRouter.js'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})
app.listen(8000, ()=>{
    console.log('server is running on 8000')
})