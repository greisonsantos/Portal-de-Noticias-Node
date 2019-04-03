
module.exports = function(app){ 

  app.get('/', function(req, res){
   var mysql = require ('mysql');
    var connection= mysql.createConnection({
      host:'localhost',
      user: 'greison',
      password:'160597',
      database: 'portal_noticias'

    });

  //recebe 2 parametros sql e callback

    connection.query('select *from noticias' , function(error, result){

      res.send(result);
    });

  
      //  res.render("home/index");
    });

};