angular.module('ionicApp')

.controller('AddFurnitureCtrl', function($scope, $state, $ionicHistory,$rootScope ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
/*    $scope.addWindows = function(user) {
    console.log('addWindows');
    $state.go('AddWindows');
    };*/
    $scope.layout = function(user) {
    console.log('Layout',$rootScope.value);
    $state.go('Layout');
    };
  })
