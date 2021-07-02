//core modules
var http = require('http')
var fs = require('fs')

//custom modules
var ourModule = require('./ourmodule.js')

var server = http.createServer((req, res) => {
    res.end("Welcome to Atoss World")
})

server.listen(3000)
console.log(ourModule.ourFunction())
fs.readFile('dummy.txt', 'utf-8', (err,data) => {
    if(err) {
        console.log("Err while reading the file")
    } else {
        console.log(data)
    }
})