'use strict';

angular.module('contacts').value('FieldTypes', {
		text: 	['Text', 'Should be text'],
		email: 	['Email', 'Should be an email address'],
		number: ['Number', 'Should be a number'],
		date: 	['Date', 'Should be a date'],
		datetime: 	['Datetime', 'Should be a datetime'],
		time: 	['Time', 'Should be a time'],
		month: 	['Month', 'Should be a month'],
		week: 	['Week', 'Should be a week'],
		url: 	['Url', 'Should be a URL'],
		tel: 	['Phone Number', 'Should be a phone number'],
		color: 	['Color', 'Should be a color']
	});