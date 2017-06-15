/*-------------------------Controller for the Temp Menu------------------------*/

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
  /*Temp menu GET request---------------------------------------------*/
  app.get('/', function(request, response)
  {
    response.render('temp')
  })
  /*Temp menu GET request----------------------------------------------*/

  /*Temp menu POST request --------------------------------------------*/
  app.post('/', urlEnP, function(request, response)
  {
    var inp = request.body.inputText
    var jsonContent = JSON.parse(inp)
    connection.query('select id from loginTypes where Name = ' + connection.escape(jsonContent.loginType), function(err, result)
    {
      connection.query('insert into users(loginType, accessToken) values(' + connection.escape(result[0].id) + ',' + connection.escape(jsonContent.accessToken)+')')
      connection.query('select id from users order by id desc limit 1', function(err, res)
      {
        response.send(res[0].id.toString())
      })
    })
  })
  /*Temp menu POST request-----------------------------------------------*/

  /*Temp menu DELETE request-----------------------------------------------*/
}
