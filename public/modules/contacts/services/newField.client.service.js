'use strict';

angular.module('contacts').directive('newField', function($filter, FieldTypes, $rootScope){
	return{
		restrict: 'EA',
		templateUrl: 'modules/contacts/views/new-field.html',
		replace: true,
		scope: {
			record: '=',
			live: '@'
		},
		require: '^form',
		link: function($scope, element, attr, form){
			$scope.types = FieldTypes;
			$scope.field = {};

			$scope.show = function(type){
				$scope.field.type = type;
				$scope.display = true;
			}; 

			$scope.remove = function(){
				$scope.field = {};
				$scope.display = false;
			};

			$scope.add = function(){
				if(form.newField.$valid){
					$rootScope.contactType[$scope.field.name] = $scope.field.type;
					console.log($rootScope.contactType);
					$scope.record[$filter('camelCase')($scope.field.name)] = $scope.field.value;
					$scope.remove();
					if($scope.live!== 'false'){
						console.log($scope.record);
						$scope.record.$update(function(updatedRecord){
							$scope.record = updatedRecord;
						});
					}
				}
			};
		}
	};
});