angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  })

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('BedroomSize', {
      url: '/Bedroom-Size',
      templateUrl: 'templates/BedroomSize.html',
      controller: 'BedroomSizeCtrl'
  })
  .state('AddDoors', {
      url: '/Add-Doors',
      templateUrl: 'templates/AddDoors.html',
      controller: 'AddDoorsCtrl'
  })
  .state('AddWindows', {
      url: '/Add-Windows',
      templateUrl: 'templates/addwindows.html',
      controller: 'AddWindowsCtrl'
  })    
  .state('AddFurniture', {
      url: '/Add-Furniture',
      templateUrl: 'templates/AddFurniture.html',
      controller: 'AddFurnitureCtrl'
  })  
    .state('Layout', {
      url: '/Layout',
      templateUrl: 'templates/Layout.html',
      controller: 'LayoutCtrl'
  })  
  $urlRouterProvider.otherwise('/Bedroom-Size');
})  
.controller('BedroomSizeCtrl', function($scope, $state) {
    $scope.addDoors = function(user) {
    console.log('addDoors');
    $state.go('AddDoors');
    };
  })  
.controller('AddDoorsCtrl', function($scope, $state, $ionicHistory ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
/*    $scope.bedroomSize = function(user) {
    console.log('BedroomSize');
    $state.go('BedroomSize');
    };*/
    $scope.addWindows = function(user) {
    console.log('addWindows');
    $state.go('AddWindows');
    };

  }) 
.controller('AddWindowsCtrl', function($scope, $state, $ionicHistory ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
/*    $scope.addDoors = function(user) {
    console.log('addDoors');
    $state.go('AddDoors');
    };*/
    $scope.addFurniture = function(user) {
    console.log('AddFurniture');
    $state.go('AddFurniture');
    };
  }) 
.controller('AddFurnitureCtrl', function($scope, $state, $ionicHistory ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
/*    $scope.addWindows = function(user) {
    console.log('addWindows');
    $state.go('AddWindows');
    };*/
    $scope.layout = function(user) {
    console.log('Layout');
    $state.go('Layout');
    };
  }) 
/*.controller('LayoutCtrl', function($scope, $state) {
    $scope.addFurniture = function(user) {
    console.log('AddFurniture');
    $state.go('AddFurniture');
    };
  }) 
*/
  .controller('LayoutCtrl', function($scope, $ionicHistory ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
  })