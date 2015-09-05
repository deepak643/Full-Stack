'use strict';

angular.module('contacts').controller('NewController', ['$scope', '$rootScope', '$http', '$location', 'Contact',
	function($scope, $rootScope, $http, $location, Contact) {
		$rootScope.PAGE = 'new';
		$scope.contact = new Contact({
			firstName: 	'',
			lastName: 	'',
			email: 		'',
			homePhone: 	'',
			cellPhone: 	'',
			birthday: 	'',
			website: 	'',
			address: 	''
		});

		$rootScope.contactType = {
			firstName: 	'text',
			lastName: 	'text',
			email: 		'email',
			homePhone: 	'tel',
			cellPhone: 	'tel',
			birthday: 	'date',
			website: 	'url',
			address: 	'text'
		};

		$scope.save = function(){
			if($scope.newContact.$invalid)
				$scope.$broadcast('record:invalid');
			else{
				$scope.contact.$save();
				$location.url('/contacts');
			}
		};
	}
]);