var express = require('express')
var main = require('./controllers/main')
var login = require('./controllers/login')
var signup = require('./controllers/signup')
var profile = require('./controllers/profile')
var app = express() // The App itself is stored here -<

app.set('view engine', 'ejs') // EJS Engine Setup
app.use(express.static('./assets')) // Setting up the Static assets

main(app)
login(app)
profile(app)
signup(app)
app.listen(3000, '')

console.log('Listening -> 3000');
