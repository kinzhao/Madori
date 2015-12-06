angular.module('ionicApp')

.controller('AddWindowsCtrl', function($scope, $state, $ionicHistory,$rootScope ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
/*    $scope.addDoors = function(user) {
    console.log('addDoors');
    $state.go('AddDoors');
    };*/
    $scope.addFurniture = function(user) {
    console.log('AddFurniture',$rootScope.value);
    $state.go('AddFurniture');
    };
  })
