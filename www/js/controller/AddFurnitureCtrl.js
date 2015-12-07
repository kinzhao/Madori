angular.module('ionicApp')

.controller('AddFurnitureCtrl', function($scope, $state, $ionicHistory, $rootScope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/AddFurniture-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
    }).then(function(modal) {
    $scope.modal = modal;
    });
    $scope.openModal = function() {
    $scope.modal.show();
    };
    $scope.closeModal = function() {
    $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
    $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });

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
