//installs packages
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();

//needed for heroku
app.listen('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/Public'));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connects this page with burgers_controller.js
require('./controllers/burgers_controller.js')(app);

//tells app to start listening to port


