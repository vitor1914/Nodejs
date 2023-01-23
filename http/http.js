var http = require("http");

http.createServer(function(req, res){
    res.end("Bem vindo ao servidor");
}).listen(8381);

console.log("O servidor online!");