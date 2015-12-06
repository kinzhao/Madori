angular.module('ionicApp')

.controller('BedroomSizeCtrl', function($scope, $state,$rootScope) {
    $rootScope.value = 80;
    $rootScope.room = [{width:0,
                        height:0}];
    var width,height,scale;
    var canvasw,canvash;

    $scope.drawRoom = function(){
      width = $rootScope.room.width;
      height = $rootScope.room.height;

      if(!$rootScope.room.width)
      { width = 0; }

      if(!$rootScope.room.height)
        {height = 0;}
        scale = width/height;
      console.log(width,height,scale);
      var container = document.getElementById("room_canvas_holder");
      var remover = document.getElementById("roomcanvas");
      if(remover)
      {
      container.removeChild(remover);
     }
      acwidth = container.clientWidth;

    var room = document.createElement("canvas");
    //room.width = width;
    //room.height = height;
    if( ((width*10)*2) < acwidth)
    {
    canvasw = ((width*10)*2)+"px";
    canvash = ((height*10)*2)+"px";
    }
    else {
    canvasw = (width*10)+"px";
    canvash = (height*10)+"px";
    }
    room.style.width = canvasw;
    room.style.height = canvash;
    room.style.border = "5px solid black";
    room.id = "roomcanvas";
    room.class = "center";
    container.appendChild(room);
    };

    $scope.addDoors = function() {
    console.log('addDoors ',$rootScope.room);
    $rootScope.cwidth = canvasw;
    $rootScope.cheight = canvash;
    $state.go('AddDoors');
    };
  })
