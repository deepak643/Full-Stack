'use strict';

angular.module('contacts').controller('EditController', ['$scope', '$stateParams' ,'$location', '$rootScope', 'Contact',
	function($scope, $stateParams, $location, $rootScope, Contact) {
		$rootScope.PAGE = 'edit';

		$scope.contact = Contact.get({ id: $stateParams.id});

		$scope.delete = function(){
			$scope.contact.$delete();
			$location.url('/contacts');
		};
	}
]);