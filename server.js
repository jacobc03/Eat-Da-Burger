var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
 
// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


 




app.listen(3000)

