var app = require ('./config/server');

// var rotahome = require('./app/routes/home')(app);
// var rotanoticia = require('./app/routes/noticias')(app);
// var rotaformadd = require('./app/routes/form_add_noticia')(app);


app.listen(3000, function(){
     console.log(" tudo certo");
});

//install mysql
// npm install  mysql --save

//consign autoload  de rotas views controller e models
// npm install consign --save
