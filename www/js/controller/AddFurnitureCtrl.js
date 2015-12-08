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
    $scope.f = [{width:0,len:0,name:""}];   
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

    $scope.layout = function() {
    console.log('Layout',$rootScope.value);
    $state.go('Layout');
    };
        
    $scope.typeChange = function(){
        $scope.f.name="";
        $scope.furtype = document.getElementById("furnituretypelist").value;
        console.log($scope.furtype);
    }
    
    $scope.addFurniture = function(){
        console.log(($scope.f.name || $scope.furtype),
                    $scope.f.width,
                    $scope.f.len);
    }
  })
