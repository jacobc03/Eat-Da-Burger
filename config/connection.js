var mysql = require('mysql');

//connects to my burgers_db MySQL Database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "burgers_db"
})

//Successful connection is shown through console log
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);

})

//exports connection to be used in orm.js file
module.exports= connection;