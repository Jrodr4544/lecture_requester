// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http, LectureRequestsFactory, request){
    debugger
    
    var vm    = this;
    var scope = $scope;
    
    scope.service = LectureRequestsFactory;
    // The line below assigns one request for when the show action is called. It gets the resolved request 
    vm.request  = scope.$resolve.request;
    vm.requests = LectureRequestsFactory.LectureRequestsFactory.allRequests;

    scope.$on('requests:updated', function(event,data) {
      debugger
      // event listener for when LectureRequestsFactory's allRequests get's updated sets the new requests accordingly 
      vm.requests = data;
    });

    // scope.$watch('LectureRequestsFactory.LectureRequestsFactory.allRequests', function (newVal, oldVal, scope) {
    //   vm.requests = LectureRequestsFactory.LectureRequestsFactory.allRequests;
    //   debugger
    //   if(newVal != oldVal) { 
    //     vm.requests = newVal;
    //   } else {
    //     vm.requests = LectureRequestsFactory.LectureRequestsFactory.allRequests;
    //   }
    // });

    scope.submitComment = function($event) {
      debugger
      alert('submitting comment');
      scope.service.addComment(this.request.id, $event.target.value);
      debugger
      var i = $event;
      // need to push this comment to the scope
      // $scope.items.push('wazzzup');
    }

  }

  LectureRequestsController.$inject = ['$scope', '$http', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());

  // Below functions commented out because they can now be called straight from the DOM

    // vm.getRequests   = getRequests;
    // vm.userRequests  = userRequests;
    // vm.getRequest    = getRequest;
    // vm.createRequest = createRequest;
    // vm.updateRequest = updateRequest;
    // vm.likedRequests = likedRequests;
    // vm.addComment    = addComment;


    // function updateRequest(id, data) {
    //   return LectureRequestsFactory.updateRequest(id, data)
    //           .then(/*callback function*/)
    // }



    // function createRequest() {
    //   debugger
    //   return LectureRequestsFactory.createRequest($scope.lectureRequest)
    //           .then(function(response){
    //             console.log(response);
    //           })
    // }


