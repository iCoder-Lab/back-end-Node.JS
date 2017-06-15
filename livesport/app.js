/*The Main app*/

/*Require dependencies*/
var express = require('express')
var app = express()
var temp = require('./controllers/temp')
var notes = require('./controllers/notes')
/*Require dependencies*/

/*Set dependencies*/
app.set('view engine', 'ejs') // EJS Engine Setup
app.use(express.static('./assets')) // Setting up the Static assets
/*Set dependencies*/

/*Initialize Controllers*/
temp(app)
notes(app)
/*Initialize Controllers*/

app.listen(3000) // Listen on port 3000
