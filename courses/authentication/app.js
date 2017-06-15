var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var urlendcodedParser = bodyParser.urlencoded({extended: false})

var users = [{_username: 'mamur', _password: 123}]

// template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.get('/', function(request, response)
{
  response.render('login');
});

app.get('/login', function(request, response)
{
  response.render('login');
});

app.get('/register', function(request, response)
{
  response.render('register')
})

app.post('/', urlendcodedParser, function(request, response)
{
    console.log(request.body)
    let password = request.body.pass
    let user = request.body.user
    var bool = false;
    for(i = 0; i < users.length; i++)
    {
      if(users[i]._username == user && users[i]._password == password)
      {
        bool = true; break;
      }
    }
    if(bool)
    {
      response.render('profile-page', {data: request.body})
    }

    else
    {
        response.render('login')
    }
    //response.render((request.body.pass == 1) ? ('profile-page', {data: request.body}) : 'login')

})

app.post('/register', urlendcodedParser, function(request, response)
{
  console.log(request.body)
  let pWord = request.body.password
  let uName = request.body.username
  var bool = true;
  for(i = 0; i < users.length; i++)
  {
    if(users[i]._username == uName)
    {
      response.send('User name already exists')
      break;
    }
  }

  if(bool)
  {
    var user = 
    {
      _username: uName,
      _password: pWord
    }
    users.push(user)

    response.send('Successfully Registered')
  }

})
app.listen(3000);
console.log('You are listening to port 3000');
