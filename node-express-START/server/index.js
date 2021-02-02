// Express Application
// ES Modules export - import (work in browsers)
// bundler
// Node uses Common.js module.exports = const/func - require (don't work in browsers)
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// setup express to serve static html pages
app.use(express.static(path.join(__dirname, '../public')));

// http requests use the GET method
// http method get built into express
// app.get(endpoint. (cb)) cb 3 params req, res, next

// API for employees
// baseURL api/v1/employees
app.get('/api/v1/employees', (req, res, next) => {
    res.send({name:"chris"});
})

app.get('/login', (req, res, next) => {
    res.send('this is going to be in my login page');
})

app.get('/signup', (req, res, next) => {
    res.send('this is going to be in my signup page');
})

// public 404 page file not found
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.listen('3000', () => {
    console.log(`SERVER IS RUNNING ON -------- http://localhost:${PORT}`);
});