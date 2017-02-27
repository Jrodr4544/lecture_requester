// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope, Auth, $state, LectureRequestsFactory, $rootScope){
    debugger
    var vm = this;
    // vm.heartRequest = heartRequest;

    var scope = $scope;
    
    scope.service  = LectureRequestsFactory;
    scope.user     = Auth._currentUser;
    debugger
    vm.likes       = [];
    vm.requests    = LectureRequestsFactory.LectureRequestsFactory.userRequests;

    scope.setLikes = function() {
      vm.likes = scope.service.likedRequests(scope.user);
    }

    // make comments reflect this
    scope.heartRequest = function($event) {
      debugger
      var data = {
        lecture_request_id: $scope.request.id
      }
      LectureRequestsFactory.heartRequest(data);
    }

    scope.remove = function(request_id) {
      debugger
      scope.service.removeRequest(request_id);
    }

  }

  UserProfileController.$inject = ['$scope', 'Auth', '$state', 'LectureRequestsFactory', '$rootScope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());

