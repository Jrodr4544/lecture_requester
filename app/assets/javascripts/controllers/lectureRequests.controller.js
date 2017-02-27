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

    scope.submitComment = function($event) {
      debugger
      alert('submitting comment');
      scope.service.addComment(this.request.id, $event.target.value);
    }

  }

  LectureRequestsController.$inject = ['$scope', '$http', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());

