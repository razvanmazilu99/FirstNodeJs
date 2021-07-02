//core modules
var http = require('http')
var fs = require('fs')

//custom modules
var ourModule = require('./ourmodule.js')
var ourModule1 = require('./mathmodule.js')

var server = http.createServer((req, res) => {
    fs.readFile('./simple.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(3000)
console.log(ourModule.ourFunction())

fs.readFile('dummy.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log("Err while reading the file")
    } else {
        console.log(data)
    }
})

console.log(ourModule1.add(7, 8))
console.log(ourModule1.sub(7, 8))
console.log(ourModule1.mul(7, 8))
console.log(ourModule1.div(7, 8))