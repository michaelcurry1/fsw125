const express = require('express')
const app = express();

app.use(express.json())

app.use("/bounties",require('./bountyRouter'))
app.listen(8000, ()=>{
    console.log('server is running on 8000')
})