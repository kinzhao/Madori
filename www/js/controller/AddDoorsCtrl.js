angular.module('ionicApp')

.controller('AddDoorsCtrl', function($scope, $state, $ionicHistory ,$rootScope ) {
    $scope.goBack = function() {
    $ionicHistory.goBack();
    };
    $scope.addWindows = function(user) {
    console.log('addWindows',$rootScope.value);
    $state.go('AddWindows');
    };

    $rootScope.door = [{width:0}];
    var doortype;

    $scope.addDoor = function(){
      doortype = document.getElementById("doortypelist").value;
      console.log("door ",$rootScope.door.width,$scope.item);
    }
    $scope.roomwidth = $rootScope.cwidth;
    $scope.roomheight = $rootScope.cheight;
    console.log("W and H",$scope.roomwidth,$scope.roomheight);
  })
