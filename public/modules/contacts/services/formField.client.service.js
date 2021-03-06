'use strict';

angular.module('contacts').directive('formField', function($timeout, FieldTypes, _){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: 'modules/contacts/views/form-field.html',
			scope: {
				record: '=',
				field: '@',
				live: '@',
				required: '@'
			},
			link: function($scope, element, attr){
				$scope.$on('record:invalid', function(){
					$scope[$scope.field].$setDirty();
				});

				$scope.types = FieldTypes;

				$scope.remove = function(field){
					//delete $scope.record[field];
					$scope.record[field] = '';
					$scope.blurUpdate();
				};

				$scope.blurUpdate = function(){
					if($scope.live!== 'false'){
						console.log($scope.record);
						$scope.record.$update(function(updatedRecord){
							$scope.record = updatedRecord;
						});
					}
				};

				var saveTimeout;
				$scope.update = function(){
					$timeout.cancel(saveTimeout);
					saveTimeout = $timeout($scope.blurUpdate, 1000);
				};
			}
		};
	});