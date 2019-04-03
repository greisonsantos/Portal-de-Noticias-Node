
var dbConnection= require('../../config/dbConnection')
module.exports = function(app){ 

   var connection= dbConnection();
  app.get('/', function(req, res){
         connection.query('select *from noticias' , function(error, result){
           // res.send(result);
           res.render("home/index", {noticias: result});
         });
  });

};