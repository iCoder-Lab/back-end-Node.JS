var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended: false})

module.exports = function(app)
{
  app.get('/', function(request, response)
  {
      response.render('main')
  })

  app.post('/', urlParser, function(request, response)
  {

  })

  app.delete('/', function(request, response)
  {

  })

}
