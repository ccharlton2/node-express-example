const porter = require('dotenv').config( )
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const PORT = 3000;
 

// MIDDLE WARE
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))

 
console.log(porter)

//begining of our api
app.get('/api/v1', (req, res, next)=>{
   res.json({name:"jim"})
})

// Catch Any Page Not Found
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
})
 
app.listen(PORT, ()=> {
    console.log(`Your Server Is Running On---------> http://localhost:${PORT}`)
})