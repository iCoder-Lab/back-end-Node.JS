var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended: false})
var mysql = require('mysql');

var connection = mysql.createConnection // Creating a connection with the Users database
(
  {
    host: 'localhost',
    user: 'root',
    password: 'defender1145',
    database: 'articles'
  }
);

connection.connect(function(error) // Handle an Error for the Current Connection
{
  if(error)
  {
    console.log('Error');
  }

  else
  {
    console.log('Connected to the Users Database')
  }
});


//connection.query('insert into users set ? ', user);
module.exports = function(app)
{
  app.get('/login', function(request, response)
  {
      response.render('login')
  })

  app.post('/login', urlParser, function(request, response)
  {
    var name = request.body.loginName;
    var pass = request.body.userPassword;

    var res = []
    connection.query('select * from users where name = ' + connection.escape(name) + ' and password = ' +
          connection.escape(pass), function(error, result)
    {
      if(result.length != 0)
      {
        response.render('profile')
      }

      else
      {
        response.render('login')
      }
    })
  })

  app.delete('/login', function(request, response)
  {

  })

}
