const express = require('express');
const app = express();

app.use(express.json())

app.use("/thingFinder",require('./thingFinder.js'))

app.listen('3000', () => {
    console.log('thing finder server.')
})