var express = require('express');  //retorna uma função sem executar
var app= express();

app.set('view engine', 'ejs'); //passando para o express que o ejs será o motor de views


app.get('/tecnologia', function(req, res){
      res.render("home/index");
});

app.get('/form_inclusao_noticia', function(req, res){
      res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
      res.render("noticias/noticias");
});



app.listen(3000, function(){

     console.log(" tudo certo");
});
