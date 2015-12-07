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
  var n;
  $scope.addD = function(){
    doortype = document.getElementById("doortypelist").value;

    console.log("door ",$rootScope.door.width,doortype);
  }

  $scope.addDoor = function(){
    var door = document.createElement("div");
     // var name = document.createElement("p");
     // var r = document.createTextNode("Door");
      //name.appendChild(r);
      //door.appendChild(name);

      door.classList.add('newdrag');
      door.style.width = $rootScope.door.width*10+"px";
      if(doortype == "Single")
      {
        door.style.height = $rootScope.door.width*10+"px";
        console.log("in single");
      }
      else if(doortype == "Double")
      {
        door.style.height = ($rootScope.door.width/2)*10+"px";
        console.log("in double");
      }
      else
      {
        door.style.height = "3px";
        console.log("in sliding");
      }

      var room = document.getElementById("roomholder");
      n = room.getBoundingClientRect();
      console.log(n.top,n.left,n.bottom,n.right);
      room.appendChild(door);
      door.classList.add('draggable');
    }

    interact('.draggable')
      .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
        var textEl = event.target.querySelector('p');

        textEl && (textEl.textContent =
            'moved a distance of '
            + (Math.sqrt(event.dx * event.dx +
                           event.dy * event.dy)|0) + 'px');
    }
  });

function dragMoveListener (event) {
  var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  //window.dragMoveListener = dragMoveListener;

    //$scope.roomwidth = $rootScope.cwidth;
    //$scope.roomheight = $rootScope.cheight;
    //$scope.roomwidth = 400;
    //$scope.roomheight = 400;
    console.log("W and H",$scope.roomwidth,$scope.roomheight);
  })
