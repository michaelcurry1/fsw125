const express = require('express')
const app = express();

app.use(express.json())

app.use("/todos",require('./todoServer.js'))
app.listen(9000, ()=>{
    console.log('server is running on 9000')
})