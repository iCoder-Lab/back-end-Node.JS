var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended: false})

module.exports = function(app)
{
  app.get('/profile', function(request, response)
  {
      response.render('profile')
  })

  app.post('/profile', urlParser, function(request, response)
  {

  })

  app.delete('/profile', function(request, response)
  {

  })

}
