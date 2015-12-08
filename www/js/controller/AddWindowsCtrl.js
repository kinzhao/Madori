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

        $scope.callMe = function(ev){
            console.log(ev);
            winds.style.top = ev.gesture.deltaY;
            winds.style.left = ev.gesture.deltaX;
        }
        var winds;
        $rootScope.window = [{width:0}];
        var room,door;

        $scope.$on("$ionicView.loaded",function(){
            room = document.querySelector("#roomholderwindow");
            
            for(var i=0, len =$rootScope.box.length; i < len; i++){
            door = document.createElement("div"); 
            console.log($rootScope.box[i].width,$rootScope.box[i].height,
                        $rootScope.box[i].x,$rootScope.box[i].y);
            door.style.width = $rootScope.box[i].width+"px"; 
            door.style.height = $rootScope.box[i].height+"px";
            door.style.backgroundColor = "blue";
            door.style.position = "absolute";
            door.style.left = $rootScope.box[i].x+"px";
            door.style.top = $rootScope.box[i].y+"px";
            var zval = 100*i;
            door.style.zIndex = zval;
            door.style.float = "left";
            room.appendChild(door);
        }
        });
        
        $scope.addWindow = function()
        {
        console.log("Inside");
        var window = document.createElement("canvas");
        window.style.width = (($rootScope.window.width*10)*2)+"px";
        window.classList.add('dragg');
        window.style.height = "10px";  
        window.style.backgroundColor = "red";
        room.appendChild(window);
            
            
            // get all draggie elements
        var draggableElems = document.querySelectorAll('.dragg');
            // array of Draggabillies
        var draggies = []
            // init Draggabillies
        for ( var i=0, len = draggableElems.length; i < len; i++ ) {
        var draggableElem = draggableElems[i];
        var draggie = new Draggabilly( draggableElem, {
            containment: true
        });
        draggies.push( draggie );
        }
    }
        
        

})
