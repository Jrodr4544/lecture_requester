// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope, Auth, $state, LectureRequestsFactory, $rootScope){
    debugger

    var vm = this;

    // vm.heartRequest = heartRequest;
    vm.likedRequests = LectureRequestsFactory.LectureRequestsFactory.userRequests;

    var scope = $scope;
    
    scope.service = LectureRequestsFactory;
    scope.user    = Auth._currentUser


    scope.heartRequest = function($event) {
      debugger
      alert('submitting heart');
      debugger 
      // missing a post to the add heart action in lecture requests controller
      // then need to update the ng-model for the hearts
      var data = {
        lecture_request_id: $scope.request.id
                   // user_id: Auth._currentUser.id
      }
      LectureRequestsFactory.heartRequest(data);
    }

  }

  UserProfileController.$inject = ['$scope', 'Auth', '$state', 'LectureRequestsFactory', '$rootScope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());

