/*-------------------------Controller for the Notes Menu------------------------*/

/*Require dependencies-------------------------------------------*/
var bodyP = require('body-parser')
var urlEnP = bodyP.urlencoded({extended: 'false'})
var mysql = require('mysql')
/*Require dependencies-------------------------------------------*/

/*Database Connection---------------------------------------------*/
var connection = mysql.createConnection
(
  {
    host: 'localhost',
    user: 'root',
    password: 'defender1145',
    database: 'liveSport'
  }
)
/*Database Connection------------------------------------------------*/

/*The actual Controller itself for GET, POST, DELETE and etc. requests*/
module.exports = function(app)
{
  /*Notes menu GET request---------------------------------------------*/
  app.get('/notes', function(request, response)
  {
    response.render('temp')
  })
  /*Notes menu GET request----------------------------------------------*/

  /*Notes menu POST request --------------------------------------------*/
  app.post('/notes', urlEnP, function(request, response)
  {
    var inp = request.body.inputText
  })

  /*Notes menu POST request-----------------------------------------------*/
}
