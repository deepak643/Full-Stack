'use strict';

angular.module('contacts').factory('Contact', ['$resource',	function($resource) {
	console.log('Iam cliked');
	return $resource('/api/contacts/:id', {id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]);