'use strict';

// Setting up route
angular.module('contacts').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider
		.state('list', {
			url: '/contacts',
			templateUrl: 'modules/contacts/views/contacts.client.list.html'
		})
		.state('create', {
			url: '/contacts/new',
			templateUrl: 'modules/contacts/views/contacts.client.new.html'
		})
		.state('edit', {
			url: '/contacts/:id',
			templateUrl: 'modules/contacts/views/contacts.client.edit.html'
		});
	}
]);