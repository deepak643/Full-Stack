'use strict';

var mongoose = require('mongoose'),
	Contacts = mongoose.model('Contacts');

module.exports = function(app) {

	app.route('/api/contacts')
	.get(function(req, res){
		Contacts.find({userName: req.user.username}, function(err, data){
			res.json(data);
		});
	})
	.post(function(req, res){
		var contact = req.body;
		contact.userName = req.user.username;
		Contacts.create(contact, function(err, data){
			res.json(data);
		});
	});

	app.param('id', function(req, res, next){
		req.contactClicked = { _id: req.params.id };
		next();
	});

	app.route('/api/contacts/:id')
	.get(function(req, res){
		Contacts.findOne(req.contactClicked, function(err, data){
			res.json(data);
		});
	})
	.put(function(req, res){
		var contact =  req.body;
		delete contact.$promise;
		delete contact.$resolved;

		console.log(contact);

		Contacts.update(req.contactClicked, contact, function(err, data){
			res.json(data[0]);
		});
	})
	.delete(function(req, res){
		Contacts.remove(req.contactClicked, function(err, data){
			res.json(null);
		});
	});
};