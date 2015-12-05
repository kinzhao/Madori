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
  .controller('LayoutCtrl', function($scope, $ionicHistory, $ionicSlideBoxDelegate) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.slides = [
    {src:'http://www.house-interior-design.xyz/wp-content/uploads/2015/10/small-bedroom-interior-design-ideas-image-iGpl.jpg', name:"1"},
    {src:'http://www.housing.uvic.ca/assets/images/Double_DTAC.jpg', name:"2"},
    {src:'http://www.houseplanshelper.com/images/small_bedroom_design_queen_3.jpg', name:"3"},
    {src:'https://s-media-cache-ak0.pinimg.com/236x/d9/cd/60/d9cd60c5a7687ff39fb226b55f1dbb1f.jpg', name:"4"}
    ];
    
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  })