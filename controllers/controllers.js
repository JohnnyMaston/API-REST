//File: controllers/controllers.js for users
var mongoose = require('mongoose');
var Users = require('../models/models.js');
//var Users = mongoose.model('Users');

//GET - Return all Users in the DB
exports.findAllUsers = function(req, res) {
	Users.find(function(err, Users) {
    if(err) res.send(500, err.message);

    console.log('GET /Users')
		res.status(200).jsonp(Users);
	});
};
//End

//GET - Return a Users with specified ID
exports.findById = function(req, res) {
	Users.findOne(req.params.id, function(err, Users) {
    if (err) return res.send(500, err.message);
    console.log('GET /Users/' + req.params.id);
		res.status(200).jsonp(Users);
	});
};
//End

//POST - Insert a new Users in the DB
exports.addUsers = function (req, res) {
	console.log('POST');
	console.log(req.body);

	var timed = Date.now();
	var data = {
		name:    req.body.name,
		email: 	  req.body.email,
		password:  req.body.password,
		created:		timed,
		updated:    timed
	};
	console.log(timed);

	Users.create(data, function(err,success) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(success);
	});
};
//End

//PUT - Update a register already exists
exports.updateUsers = function (req, res) {
	Users.findById(req.params.id,function(err, Users){
		Users.name = req.body.name;
		Users.email = req.body.email;
		Users.password = req.body.password;
		Users.updated = Date.now();

		Users.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(Users);
		});
	});
};
//End

//DELETE - Delete a Users with specified ID
exports.deleteUsers = function(req, res) {
	Users.findById(req.params.id, function(err, Users) {
		Users.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
//End
