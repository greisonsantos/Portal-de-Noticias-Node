var app = require ('./config/server');

var rotahome = require('./app/routes/home')(app);
// rotahome(app);
var rotanoticia = require('./app/routes/noticias')(app);
// rotanoticia(app);

var rotaformadd = require('./app/routes/form_add_noticia')(app);
// rotaformadd(app);

app.listen(3000, function(){

     console.log(" tudo certo");
});

//install mysql
// npm install  mysql --save