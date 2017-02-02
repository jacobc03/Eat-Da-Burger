//Installs MySQL
var mysql = require('mysql');

//stores information that is needed connect to my burgers_db MySQL Database
var connection = mysql.createConnection({
    host: 'mysql3.gear.host',
    port: 3306,
    user: "burgersdb1", //Your username
    password: process.env.PASS, //Your password
    database: "burgersdb1"
})

//Connects to mySQL Database and logs successful connection is shown through console log
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
})

//exports connection to be used in orm.js file
module.exports= connection;