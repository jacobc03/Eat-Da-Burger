// Basic server file. This file is soley to set up the express server & middleware
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/Public'));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This makes a connection with burgers_controller.js; app is passed in as a parameter which allows
// express commands to be used in burgers_controller.js despite app not being defined in that file (see burgers_controller.js)
require('./controllers/burgers_controller.js')(app);

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

