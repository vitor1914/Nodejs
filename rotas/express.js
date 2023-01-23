const express = require("express");

const app = express();


app.get("/", function(req, res){
    res.send("Pagina online!")
});

app.get ("/sobre", function(req, res){
    res.send("Minha primeira pagina");
});

app.get ("/ola/:cargo/:nome/:cor", function(req, res){
    res.send("<h1> ola "+req.params.nome+"</h1>");
});

app.listen(8381, function(){
    console.log("servidor online!");
});

