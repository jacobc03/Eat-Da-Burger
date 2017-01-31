//connects the connection var from connection.js to this file
var connection = require('./connection.js');

var queries = {
	//connects to all data on burgers table
	var selectAll = function (connection,callback) {
		connection.query('SELECT * FROM burgers', callback)
	},
	//will insert new burger into burgers table
	var insertOne = function (connection, callback, burger_name) {
		connection.query('INSERT INTO burgers (burger_name) VALUES(?)', burger_name, callback)
	},
	//will update eated burger by changing the devoured value to 1
	var updateOne = function (connection,callback, ItemID) {
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",id, callback)
	}
};

module.exports = queries;