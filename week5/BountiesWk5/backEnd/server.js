const express = require('express')
const app = express();

app.use(express.json())

app.use("/bounties",require('./bountyRouter.js'))
app.listen(8nodemon000, ()=>{
    console.log('server is running on 8000')
})