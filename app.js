var express = require('express');  //retorna uma função sem executar
var app= express();

app.set('view engine', 'ejs'); //passando para o express que o ejs será o motor de views


app.get('/tecnologia', function(req, res){
      res.render("secao/tecnologia");
});


app.listen(3000, function(){

     console.log(" tudo certo");
});
