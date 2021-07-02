var express = require('express')
var app = express()
var ourModule = require('./mathmodule.js')

//default endpoint
app.get('/', (req, res) => {
    res.send("Welcome to Atoss World")
})

app.get('/cucu', (req, res) => {
    res.send("Hello cucu")
})

app.get('/ex2', (req, res) => {
    res.send(ourModule.add(7, 8) + " ")
})

app.listen(3000, () => {
    console.log("Server is working")
})