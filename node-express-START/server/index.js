require('dotenv').config()
const express = require('express');
const path = require('path')
 

const app = express()

 
// .env contains environmental vars never upload to git...
const PORT =  process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
 
// Serving Static Web Files Middleware
const staticOpitons ={
    dotfiles: 'ignore',
    extensions: ['htm', 'html']
}
app.use(express.static(path.join(__dirname, '../client'), staticOpitons))

app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dashboard.html'));
})

app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/register.html'));
})

app.post('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dashboard.html'));
})

app.post('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dashboard.html'));
})
 
//Our API Starts Here
app.get('/api/v1/employees', (req, res)=>{
   res.send("EMPLOYEE MANAGER API")
})

// if a pace doesn't match any of our routes 
app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, '../client/404.html'))
})
 
// server listenting on port
// .env specifies what port to listen on :3000
// if you enter a different port in then use it when
// making your api requests.
// connection url to the server http://localhost:3000
app.listen(PORT, ()=> {
    console.log(`Your Server Is Running On---------> http://localhost:${PORT}`)
})