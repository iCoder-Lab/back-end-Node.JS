var express = require('express');
var app = express();

// template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.get('/', function(req, res){
  res.render('login');
});

app.listen(3000);
console.log('You are listening to port 3000');
