const express = require('express');
const app = express();
const PORT = 3000;
const endPoint1 =[
    {name:'bob',age:25},
    {name:'sam',age:32},
    {name:'mike',age:58}
]
const endPoint2 =[
    {title:'jaws',length:'2_hours'},
    {title:'shooters',length:'3_hours'},

]
const endPoint3 =[
    {title:'song remains the same',year:1980},
    {title:'run',year:1982}

]
app.get('/people',(req, res) => {
    res.send(endPoint1 )
    
});
app.get('/movies',(req, res) => {
    res.send(endPoint2)
    
});
app.get('/songs',(req, res) =>{
    res.send(endPoint3)

});



app.listen(PORT, ()=> {
    console.log(`App started on port: ${PORT}`)
});