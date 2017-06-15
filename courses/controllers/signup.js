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
  app.get('/signup', function(request, response)
  {
      response.render('signup')
  })

  app.post('/signup', urlParser, function(request, response)
  {
    var name = request.body.loginName;
    var pass = request.body.userPassword;

    var user =
    {
      name: name,
      password: pass
    }
    connection.query('select * from users where name = ' + connection.escape(name) + ' and password = ' +
          connection.escape(pass), function(error, result)
    {
      if(result.length != 0)
      {
        response.render('signup')
      }

      else
      {
        connection.query('insert into user set ? ', user)
        response.render('profile')
      }
    })
  })

  app.delete('/signup', function(request, response)
  {

  })

}
