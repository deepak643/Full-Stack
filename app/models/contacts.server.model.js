'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var contactsSchema = new Schema({
	userName: {
		type: String
	},
	firstName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		default: ''
	},
	homePhone: {
		type: Number,
		default: ''
	},
	cellPhone: {
		type: Number,
		default: ''
	},
	birthday: {
		type: Date,
		default: ''
	},
	website: {
		type: String,
		default: ''
	},
	address: {
		type: String,
		default: ''
	}
}, {strict: false});

mongoose.model('Contacts', contactsSchema);