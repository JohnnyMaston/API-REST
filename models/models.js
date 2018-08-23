//creating mongoose schema for users
var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema({
	name: 		String,
	email: 		String,
	password: 	String,
	created:		String,
	updated:		String,
});

module.exports = mongoose.model('Users', usersSchema);
//{ type: String }
