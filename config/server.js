var express = require('express');  //retorna uma função sem executar
var app= express();

app.set('view engine', 'ejs'); //passando para o express que o ejs será o motor de views
app.set('views','./app/views')

module.exports = app;