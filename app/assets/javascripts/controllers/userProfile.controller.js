// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope, Auth, $state, LectureRequestsFactory, $rootScope){
    debugger
    var vm = this;
    var scope = $scope;
        
    scope.user     = Auth._currentUser;
    vm.likes       = [];
    // debugger
    
    scope.$on('user_requests:updated', function(event,data) {
      // debugger
      // event listener for when LectureRequestsFactory's allRequests get's updated sets the new requests accordingly 
      // vm.requests = data;
      vm.requests = scope.user.lecture_requests = data;
    });

    scope.setLikes = function() {
      vm.likes = LectureRequestsFactory.likedRequests(scope.user);
    }

    scope.heartRequest = function($event) {
      // debugger
      var data = {
        lecture_request_id: $scope.request.id
      }
      LectureRequestsFactory.heartRequest(data);
    }

    scope.remove = function(request_id) {
      // debugger
      LectureRequestsFactory.removeRequest(request_id);
    }

    // set down here because we want this to be read last
    // when user requests are updated. This is the initial
    // state of the user's requests on login.
    vm.requests    = scope.user.lecture_requests;

  }

  UserProfileController.$inject = ['$scope', 'Auth', '$state', 'LectureRequestsFactory', '$rootScope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());

