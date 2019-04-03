var express = require('express');  //retorna uma função sem executar
var consign= require('consign'); //autoload automatico

var app= express();
app.set('view engine', 'ejs'); //passando para o express que o ejs será o motor de views
app.set('views','./app/views')

consign().include('app/routes').into(app);


module.exports = app;