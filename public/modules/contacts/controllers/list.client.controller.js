'use strict';

angular.module('contacts').controller('ListController', ['$scope', '$rootScope', '$location', 'Contact',
	function($scope, $rootScope, $location, Contact) {
		$rootScope.PAGE = 'all';
		$scope.contacts = Contact.query();
		$scope.fields = ['firstName', 'lastName'];

		$scope.sort = function(field){
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};

		$scope.sort.field = 'firstName';
		$scope.sort.order = false;

		$scope.show = function(id){
			$location.path('/contacts/' + id);
		};
	}
]);