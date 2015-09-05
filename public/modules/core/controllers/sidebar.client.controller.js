'use strict';

angular.module('core').controller('SidebarController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('/users/me').success(function(data){
			var userData = data;
			$scope.user = userData;
			console.log($scope.user.providerData.picture);
		})
		.error(function(err){
			console.log('Error: ' + err);
		});
	}
]);